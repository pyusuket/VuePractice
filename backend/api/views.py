from django.shortcuts import render
from rest_framework import viewsets
from .models import Category
from .serializers import CategorySerializer

# api/views.py
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer



