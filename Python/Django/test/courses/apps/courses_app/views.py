# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from models import *
# Create your views here.


def index(request):
    context = {
        "courses": courses.objects.all(),
    }
    return render(request, 'courses_app/index.html', context)


def add_course(request):
    my_description = description.objects.create(
        desc=request.POST['description'])
    courses.objects.create(name=request.POST['name'], desc=my_description)
    return redirect('/')


def destroy(request, number):
    courses.objects.get(id=number).delete()
    return redirect('/')


def confirm_delete(request, number):
    context = {
        "name": courses.objects.get(id=number).name, 
        "desc": courses.objects.get(id=number).desc.desc,
        "id": number
    }
    return render(request, 'courses_app/delete.html', context)
