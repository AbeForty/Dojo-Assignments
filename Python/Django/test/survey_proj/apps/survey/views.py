# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    if 'count' not in request.session:
        request.session['count'] =  0
    
    return render(request, 'survey/index.html')
def process(request):
    if request.method == "POST":
        request.session['count'] +=  1
        request.session['name'] = request.POST['name']
        request.session['location'] = request.POST['location']
        request.session['language'] =  request.POST['language']
        request.session['comment'] =  request.POST['comment']
        return redirect('/results')
    else:
        return redirect('/')
def results(request):
    context = {
        "name": request.session['name'],
        "location": request.session['location'],
        "language": request.session['language'],
        "comment": request.session['comment']
    }
    return render(request,'survey/results.html',context)