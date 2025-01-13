from django.urls import path
from . import views

urlpatterns = [
    path('', views.base, name='base'),
    path('projetos/', views.lista_projetos, name='lista_projetos'),  
    path('projeto/<int:projeto_id>/', views.detalhes_projeto, name='project_detail'),
]
