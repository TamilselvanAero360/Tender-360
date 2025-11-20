from rest_framework.permissions import BasePermission
from .models import User
from functools import wraps
from rest_framework.response import Response
from rest_framework import status


def role_required(*allowed_roles):
    """
    DRF-friendly decorator for roles.
    Example:
        @role_required("ADMIN", "SUPERADMIN")
    """

    def decorator(func):
        @wraps(func)
        def wrapped(request, *args, **kwargs):
            user = request.user
            if not user.is_authenticated:
                return Response({"detail": "Authentication required"}, status=401)

            if user.role not in allowed_roles:
                return Response({"detail": "Permission denied"}, status=403)

            return func(request, *args, **kwargs)

        return wrapped

    return decorator


def has_role(user, *roles):
    """
    Hierarchical role checking:
    SUPERADMIN > ADMIN > USER
    """
    role_order = {
        "SUPERADMIN": 3,
        "ADMIN": 2,
        "USER": 1
    }

    return user.is_authenticated and role_order[user.role] >= min(role_order[r] for r in roles)

class IsSuperAdmin(BasePermission):
    def has_permission(self, request, view):
        return (
            request.user.is_authenticated and request.user.role == User.Role.SUPERADMIN
        )


class IsAdmin(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role in [
            User.Role.ADMIN,
            User.Role.SUPERADMIN,
        ]


class IsRegularUser(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == User.Role.USER
