from django.shortcuts import render


def home(request):
    context = {
    'HeroBanner' : 'hero'
    }
    return render(request, 'home.html', context)

def aboutus(request):
    return render(request,'aboutus.html')

def contactus(request):
    return render(request, 'contactus.html')