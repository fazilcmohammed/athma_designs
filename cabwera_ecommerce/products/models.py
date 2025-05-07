# model
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator
from django.db import models
from django.urls import reverse_lazy
from django.utils.translation import gettext_lazy as _
from tinymce.models import HTMLField

#
from versatileimagefield.fields import VersatileImageField

from main.models import COLOR_CHOICES, UNIT_CHOICES

# Create your models here.


class Slider(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to="slider/")
    sub_head = models.CharField(max_length=400)
    content = models.TextField()

    class Meta:
        verbose_name = _("Slider")
        verbose_name_plural = _("Sliders") 
        ordering = ("title",)

    def __str__(self):
        return str(self.title)


class Category(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True)
    image = VersatileImageField(
        "category",
        blank=True,
        null=True,
        upload_to="categories/",
        help_text=" The recommended size is 120x120 pixels.",
    )
    status = models.CharField(
        max_length=20,
        choices=(("Published", "Published"), ("Unpublished", "Unpublished")),
        default="Published",
    )

    class Meta:
        verbose_name = _("Category")
        verbose_name_plural = _("Categories")
        ordering = ("name",)

    def get_products(self):
        return Product.objects.filter(category=self)

    def get_product_count(self):
        return self.category.count()

    def __str__(self):
        return f"{self.name}"


class Tag(models.Model):
    name = models.CharField(max_length=20, unique=True)
    background_color = models.CharField(
        max_length=10, choices=COLOR_CHOICES, default="success"
    )

    class Meta:
        verbose_name = _("Tag")
        verbose_name_plural = _("Tags")
        ordering = ("name",)

    def __str__(self):
        return f"{self.name}"


class Product(models.Model):
    category = models.ForeignKey(
        "products.Category", on_delete=models.CASCADE, related_name="category"
    )
    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    tag = models.ForeignKey(Tag, on_delete=models.PROTECT, blank=True, null=True)
    product_code = models.CharField(max_length=100, blank=True, null=True, unique=True)
    sku = models.SlugField(max_length=100, blank=True, null=True, unique=True)
    details = HTMLField(null=True, blank=True)
    rating = models.PositiveIntegerField(
        validators=[MaxValueValidator(5)],
        default=5,
        verbose_name="Product Rating(max:5)",
    )
    image = models.ImageField(
        upload_to="products/", help_text=" The recommended size is 220x220 pixels."
    )
    generic_name = models.CharField(max_length=200, blank=True, null=True)
    first_available_date = models.DateField(blank=True, null=True)
    is_popular = models.BooleanField(default=False)
    is_new_arrival = models.BooleanField(default=True)
    is_best_seller = models.BooleanField(default=True)
    is_offer = models.BooleanField(default=False)
    is_stock = models.BooleanField(default=True)
    # meta
    meta_title = models.CharField(max_length=200, blank=True)
    meta_description = models.TextField(max_length=500, blank=True)

    class Meta:
        ordering = [
            "id",
        ]
        verbose_name = "Product"
        verbose_name_plural = "Products"

    def get_images(self):
        return ProductImage.objects.filter(product=self)

    def get_information(self):
        return ProductInformation.objects.filter(product=self)

    def get_sizes(self):
        return AvailableSize.objects.filter(product=self)

    def get_sale_price(self):
        return min([p.sale_price for p in self.get_sizes()])

    def get_regular_price(self):
        sizes = self.get_sizes()
        valid_prices = [p.regular_price for p in sizes if p.regular_price is not None]
        return min(valid_prices) if valid_prices else None
    def get_offer_percent_first(self):
        return  self.get_sizes().first().offer_percent()
    def get_offer_percent(self):
        return min([p.offer_percent() for p in self.get_sizes()])

    def related_products(self):
        return Product.objects.filter().exclude(pk=self.pk).distinct()[0:12]

    def get_absolute_url(self):
        return reverse_lazy("web:product_detail", kwargs={"slug": self.slug})

    def get_update_url(self):
        return reverse_lazy("product:product_update", kwargs={"pk": self.pk})

    def get_delete_url(self):
        return reverse_lazy("product:product_delete", kwargs={"pk": self.pk})

    def __str__(self):
        return f" {self.name}"


class ProductInformation(models.Model):
    product = models.ForeignKey(
        "Product", verbose_name="Product Information", on_delete=models.CASCADE
    )
    name = models.CharField(max_length=50)
    value = models.CharField(max_length=50)

    def __str__(self):
        return f" {self.product}"


class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    image = models.ImageField(
        upload_to="products/", help_text=" The recommended size is 800x600 pixels."
    )

    class Meta:
        verbose_name = _("Product Image")
        verbose_name_plural = _("Product Images")
        ordering = ("product",)

    def delete(self, *args, **kwargs):
        storage, path = self.image.storage, self.image.path
        super(ProductImage, self).delete(*args, **kwargs)
        storage.delete(path)


class AvailableSize(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    weight = models.IntegerField()
    unit = models.CharField(max_length=10, choices=UNIT_CHOICES)
    sale_price = models.FloatField()
    regular_price = models.FloatField(blank=True, null=True)
    barcode = models.CharField(max_length=100, blank=True, null=True)
    is_stock = models.BooleanField(default=True)

    class Meta:
        verbose_name = _("Available Size")
        verbose_name_plural = _("Available Sizes")
        ordering = ("sale_price",)

    def offer_percent(self):
        if self.regular_price and self.regular_price != self.sale_price:
            return ((self.regular_price - self.sale_price) / self.regular_price) * 100
        return 0

    def save(self, *args, **kwargs):
        if self.regular_price is None:
            self.regular_price = self.sale_price
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.product} - {self.weight} {self.unit} "


class Offer(models.Model):
    title = models.CharField(max_length=200)
    image = VersatileImageField(
        blank=True,
        null=True,
        upload_to="Offers/",
        help_text=" The recommended size is 780x300 pixels.",
    )
    offer = models.PositiveIntegerField()

    def __str__(self):
        return str(self.title)


class OfferProduct(models.Model):
    offer = models.ForeignKey(
        Offer, verbose_name="Offer Products", on_delete=models.CASCADE
    )
    product = models.ForeignKey(
        "Product", verbose_name="Product", on_delete=models.CASCADE
    )

    def __str__(self):
        return f"{self.offer.title} - {self.product.name}"


class Review(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="reviews"
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    profile = models.ImageField(upload_to="profile_images")
    headline = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    approval = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.headline} - {self.product.name}"
