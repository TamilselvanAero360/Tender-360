from django.contrib import admin

from .models import User, Bid

admin.site.register(Bid)
admin.site.register(User)