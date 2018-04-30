# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from models import *
# Create your views here.
def index(request):
    context = { 
        "users": users.objects.all()
    }
    return render(request,'semi_restful/index.html', context)
def new(request):
    return render(request,'semi_restful/add_user.html')
def show(request, number):
    context = {
        "id": number,
        "full_name": users.objects.get(id = number).first_name + " " + users.objects.get(id = number).last_name,
        "email": users.objects.get(id = number).email,
        "date": users.objects.get(id = number).created_at
    }
    return render(request, "semi_restful/display_user.html",context)
def edit(request, number):
    request.session['id'] = number
    context = {
        "id": number,
        "first_name": users.objects.get(id = number).first_name,
        "last_name":users.objects.get(id = number).last_name,
        "email": users.objects.get(id = number).email,
    }
    return render(request,"semi_restful/edit_user.html", context)
def create(request):
    if request.method == "POST":
        users.objects.create(first_name = request.POST['first name'], last_name = request.POST['last name'], email = request.POST['email'])
    return redirect("/users/" + str(users.objects.get(first_name = request.POST['first name'], last_name = request.POST['last name']).id))
def destroy(request, number):
    users.objects.get(id = number).delete()
    return redirect("/users")
def update(request):
    if request.method == "POST":
        the_user = users.objects.get(id = request.session['id'])
        the_user.first_name = request.POST['first name']
        the_user.last_name = request.POST['last name']
        the_user.email = request.POST['email']
        the_user.save()
    return redirect("/users/" + request.session['id'])