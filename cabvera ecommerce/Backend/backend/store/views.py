from django.shortcuts import render
from rest_framework import viewsets
from . models import Category, Product
from . serializers import ProductSerializer, CategorySerializer 
# Create your views here.

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all().order_by('-created_at')
    serializer_class = ProductSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer