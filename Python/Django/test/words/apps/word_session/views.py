# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from time import localtime, strftime
def index(request):
    if not 'words' in request.session:
        request.session['words'] = []
    return render(request,'word_session/index.html')
def process(request):
    if request.method == "POST":
        className = ""
        if request.POST['color'] == 'red' and not 'bigfonts' in request.POST:
            className = "red"
        elif request.POST['color'] == 'red' and 'bigfonts' in request.POST:
            className = "redBig"
        elif request.POST['color'] == 'green' and not 'bigfonts' in request.POST:
            className = "green"
        elif request.POST['color'] == 'green' and 'bigfonts' in request.POST:
            className = "greenBig"
        elif request.POST['color'] == 'blue' and not 'bigfonts' in request.POST:
            className = "blue"
        elif request.POST['color'] == 'blue' and 'bigfonts' in request.POST:
            className = "blueBig"     
        word_holder = [request.POST['word'], strftime("%I:%M:%S %p, %B %d %Y", localtime()), className]
        message_log=request.session['words']
        message_log.append(word_holder)
        request.session['words'] = message_log
    return redirect('/')
def reset(request):
    request.session.flush()
    return redirect('/')
