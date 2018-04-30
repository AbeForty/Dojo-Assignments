# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.utils.crypto import get_random_string

# Create your views here.
def index(request): 
    if 'count' not in request.session:
        request.session['count'] = 0
    myContext = {
        "number":request.session['count']
    }
    return render(request,'random_word_generator/index.html', myContext)
def generate(request):
    if request.method == "POST":
        request.session['count'] += 1
        unique_id = get_random_string(length=32)    
        request.session['random_string'] = unique_id
        return redirect('/render')
def render_word(request):
    context = {
         "unique_id" : request.session['random_string'],
         "number" : request.session['count']
    }
    return render(request,'random_word_generator/index.html',context)
