from django.db import models

class Slider(models.Model):
    title = models.CharField(max_length=255,blank=True,null=True)
    image = models.ImageField(upload_to="slider/")
    description = models.TextField()

    class Meta:
        verbose_name = ("Slider")
        verbose_name_plural = ("Sliders")
    
    def __str__(self):
        return str(self.title)