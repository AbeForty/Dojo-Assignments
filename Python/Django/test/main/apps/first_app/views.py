# -*- coding: utf-8 -*-
from __future__ import unicode_literals

# Create your views here.
from django.shortcuts import render, HttpResponse, redirect
  # the index function is called when root is visited
def index(request):
  response = "Welcome to myBlogs!"
  return HttpResponse(response)
def new(request):
  response = "Create a new blog!"
  return HttpResponse(response)
def create(request):
  return redirect('/')
  # return HttpResponse(response)
def show(request, number):
  response = "Placeholder  to show blog " + str(number)
  return HttpResponse(response)
def edit(request, number):
  response = "Placeholder  to edit blog " + str(number)
  return HttpResponse(response)
def destroy(request):
  return redirect('/')
  # return HttpResponse(response)