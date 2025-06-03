from django.db import models

# Create your models here.
class Team(models.Model):
    name = models.CharField(max_length=50)
    role = models.CharField(max_length=50)
    image = models.ImageField(upload_to='team/')
    instagram = models.URLField(blank=True, null=True)
    linkedin = models.URLField(blank=True, null=True)
    priority = models.PositiveIntegerField(default=0)  

    class Meta:
        ordering = ['priority']  

    def __str__(self):
        return self.name