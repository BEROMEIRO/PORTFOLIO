from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('meu_portfolio.urls')),  # Incluindo as URLs do app
]