from django.shortcuts import render

def base(request):
    return render(request, 'base.html')  # Renderiza um template chamado "home.html"
