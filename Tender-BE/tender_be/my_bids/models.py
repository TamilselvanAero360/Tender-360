from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager,
    # User,
)
import uuid


class UserManager(BaseUserManager):

    def create_user(self, email, password=None, full_name="", employee_id="", role="USER", **extra_fields):
        if not email:
            raise ValueError("Email is required")

        email = self.normalize_email(email)

        user = self.model(
            email=email,
            full_name=full_name,
            employee_id=employee_id,
            role=role,
            **extra_fields
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password, full_name="Super Admin", employee_id="0000", **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        return self.create_user(
            email,
            password,
            full_name,
            employee_id,
            role=User.Role.SUPERADMIN,
            **extra_fields
        )


class User(AbstractBaseUser, PermissionsMixin):

    class Role(models.TextChoices):
        SUPERADMIN = "SUPERADMIN", "Super Admin"
        ADMIN = "ADMIN", "Admin"
        USER = "USER", "User"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=255)
    employee_id = models.CharField(max_length=50)
    role = models.CharField(max_length=20, choices=Role.choices, default=Role.USER)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["full_name", "employee_id"]

    objects = UserManager()

    def __str__(self):
        return f"{self.email} ({self.role})"

class Bid(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
