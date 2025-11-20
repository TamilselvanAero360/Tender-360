from django.urls import path
from .views import BidListCreateView
from knox.views import LogoutView, LogoutAllView
from .views import (
    register_view,
    login_view,
    logout_view,
    logout_all_view,
    profile_view,
    list_users,
    delete_user,
    list_bids,
)


urlpatterns = [
    path("auth/register/", register_view),
    path("auth/login/", login_view),
    path("auth/logout/", logout_view),
    path("auth/logout-all/", logout_all_view),
    path("auth/profile/", profile_view),
    # Role-based examples
    path("users/", list_users),  # Admin + SuperAdmin
    path("users/<uuid:user_id>/delete/", delete_user),  # SuperAdmin only
    path("bids/", list_bids, name="bids"),
]
