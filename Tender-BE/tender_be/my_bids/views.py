from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions, status
from rest_framework.response import Response
from django.contrib.auth import login

from knox.models import AuthToken
from knox.views import LogoutView, LogoutAllView

from .serializers import RegisterSerializer, LoginSerializer, UserSerializer
from .permissions import role_required
from .models import User


from knox.views import LoginView as KnoxLoginView
from rest_framework import generics, permissions
from .models import Bid, User
from .serializers import (
    BidSerializer,
    LoginSerializer,
    RegisterSerializer,
    UserSerializer,
)
from django.contrib.auth import login

from .permissions import IsAdmin


@api_view(["POST"])
# @permission_classes([permissions.AllowAny])
@role_required("SUPERADMIN")    
def register_view(request):
    serializer = RegisterSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    return Response(
        {"message": "User registered successfully", "user": UserSerializer(user).data},
        status=status.HTTP_201_CREATED,
    )


@api_view(["POST"])
@permission_classes([permissions.AllowAny])
def login_view(request):
    serializer = LoginSerializer(data=request.data, context={"request": request})
    serializer.is_valid(raise_exception=True)

    user = serializer.validated_data["user"]
    login(request, user)

    token = AuthToken.objects.create(user)[1]
    return Response(
        {
            "message": "Login successful",
            "token": token,
            "user": UserSerializer(user).data,
        }
    )


@api_view(["POST"])
def logout_view(request):
    return LogoutView().post(request)


@api_view(["POST"])
def logout_all_view(request):
    return LogoutAllView().post(request)


@api_view(["GET"])
def profile_view(request):
    user = request.user
    return Response(UserSerializer(user).data)


@api_view(["GET"])
@role_required("ADMIN", "SUPERADMIN")
def list_users(request):
    users = User.objects.all()
    return Response(UserSerializer(users, many=True).data)


@api_view(["DELETE"])
@role_required("SUPERADMIN")
def delete_user(request, user_id):
    try:
        user = User.objects.get(id=user_id)
    except User.DoesNotExist:
        return Response({"detail": "User not found"}, status=404)

    user.delete()
    return Response({"message": "User deleted successfully"})


class BidListCreateView(generics.ListCreateAPIView):
    serializer_class = BidSerializer
    # permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Bid.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


@api_view(["GET", "POST", "PUT", "PATCH", "DELETE"])
def list_bids(request):
    bids = Bid.objects.all()
    return Response(BidSerializer(bids, many=True).data)
