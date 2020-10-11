from django.shortcuts import render
from .models import *

def index(request) :
    return render(request, "index.html")

def map(request) :
    return render(request, "map.html")

def daum_map(request) :
    return render(request, "daum_map.html")
