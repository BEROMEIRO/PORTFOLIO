from django.shortcuts import render, get_object_or_404
from .models import Project

def base(request):
    return render(request, 'base.html')  

def lista_projetos(request):
    projects = Project.objects.all()
    return render(request, 'portfolio/lista_projetos.html', {'projects': projects})

def detalhes_projeto(request, projeto_id):
    project = get_object_or_404(Project, id=projeto_id)
    return render(request, 'project_details.html', {'project': project})