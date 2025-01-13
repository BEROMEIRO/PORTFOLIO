from django.db import models

# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    url = models.URLField(blank=True, null=True)  
    categories = models.CharField(max_length=50, default='categories', blank=True) 
    client = models.CharField(max_length=100, default='client', blank=True)
    date_project = models.DateField(default=None, blank=True, null=True)
    main_image = models.ImageField(upload_to='portfolio/', blank=True, null=True)
    additional_images = models.ManyToManyField('Imagem', blank=True)

    def __str__(self):
        return self.title
    

class Imagem(models.Model):
    image = models.ImageField(upload_to='portfolio/')