from uuid import uuid4

from django.db import models

# CHOICES
GENDER_CHOICES = (("MALE", "Male"), ("FEMALE", "Female"), ("OTHER", "Other"))

COLOR_CHOICES = (
    ("danger", "Red"),
    ("success", "Green"),
    ("info", "Blue"),
    ("warning", "Yellow"),
    ("primary", "Indigo"),
    ("secondary", "Gray"),
    ("light", "Light Gray"),
    ("dark", "Black"),
)


UNIT_CHOICES = (
    ("kg", "Kilogram"),
    ("pc", "Piece"),
    ("g", "Gram"),
    ("ltr", "Liter"),
    ("ml", "Milliliter"),
    ("m", "Meter"),
    ("cm", "Centimeter"),
    ("mm", "Millimeter"),
    ("in", "Inches")
)


# Create your models here.
class BaseModel(models.Model):
    BOOL_CHOICES = ((True, "Yes"), (False, "No"))

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False, blank=True)
    created = models.DateTimeField(db_index=True, auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    creator = models.ForeignKey(
        "accounts.User",
        blank=True,
        null=True,
        related_name="creator_%(class)s_objects",
        on_delete=models.CASCADE,
    )
    is_active = models.BooleanField(
        "Mark as Active", default=True, choices=BOOL_CHOICES
    )

    class Meta:
        abstract = True
