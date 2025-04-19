from django.shortcuts import render
from .models import Slider

# Create your views here.
def slider(request):
    slider_data = Slider.objects.all()
    context = {
       'slid' :  slider_data
    }
    return render(request,'home.html',context)

def products(request):
    return render(request, 'products.html')