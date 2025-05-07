from django.shortcuts import render


def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def programs(request):
    return render(request, 'programs.html')

def joinus(request):
    return render(request, 'joinus.html')

def joblisting(request):
    return render(request, 'joblisting.html')

def contact(request):
    return render(request, 'contact.html')

def login(request):
    return render(request, 'registration/login.html')

def signup(request):
    return render(request, 'registration/signup.html')