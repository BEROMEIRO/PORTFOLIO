from django.contrib import admin
from .models import Project, Imagem

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'categories', 'client', 'date_project')
    list_filter = ('categories', 'date_project')
    search_fields = ('title', 'description', 'client')
    ordering = ('-date_project',)
    list_per_page = 15
    list_max_show_all = 200
    list_editable = ('title', 'client')
    list_display_links = ('id',) 
