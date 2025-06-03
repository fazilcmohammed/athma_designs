from django.db import models

# Create your models here.

class Work(models.Model):
    CATEGORY_CHOICES = [
        ('posters', 'Posters'),
        ('videos', 'Videos'),
        ('creative_videos', 'Creative Videos'),
        ('package_designs', 'Package Designs'),
        ('logog', 'Logos'),
        ('web_design', 'Web Design'),
        ('brochures', 'Brochures'),

    ]

    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null= True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    image = models.ImageField(upload_to='works/posters/', blank=True, null=True)
    video = models.FileField(upload_to='works/videos/', blank=True, null=True)
    thumbnail = models.ImageField(upload_to='works/thumbnails/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']  # newest first

    def __str__(self):
        return self.title