# -*- coding: utf-8 -*-
from __future__ import unicode_literals
#Create your views here.
from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime
def index(request):
  context = {
  "time": strftime("%b %d, %Y", gmtime()),#   "time": strftime("%h:%M %p", gmtime())
  "date": strftime("%I:%M %p", gmtime())
  }
  return render(request,'time_display/index.html', context)
  #    <p class="box">{{time}}</p>
