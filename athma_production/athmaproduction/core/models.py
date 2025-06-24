from django.db import models

# Create your models here.

class Slider(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='slider/')
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title
