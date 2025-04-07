from django.db import models

# Create your models here.
class Slider(models.Model):
    title = models.CharField(max_length=255,blank=True,null=True)
    image = models.ImageField(upload_to="slider/")

    
    class Meta:
        verbose_name = _("Slider")
        verbose_name_plural = _("Sliders")
    
    
    def __str__(self):
        return str(self.title)