# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect

# Create your views here.
def index (request):
    if not 'total' in request.session:
        request.session['total'] = 0
    if not 'totalquantity' in request.session:
        request.session['totalquantity'] = 0
    return render(request, 'amadon/index.html')
def buy(request):
    if request.method == "POST":
        if request.POST['product_id'] == '1015':
            request.session['price'] = (float("19.99") * int(request.POST['quantity']))
        elif request.POST['product_id'] == '1020':
            request.session['price'] = (float("29.99") * int(request.POST['quantity'])) 
        elif request.POST['product_id'] == '1345':
            request.session['price'] = (float("4.99") * int(request.POST['quantity']))  
        elif request.POST['product_id'] == '1582':
            request.session['price'] = (float("49.99") * int(request.POST['quantity'])) 
        request.session['total'] += request.session['price']
        request.session['totalquantity'] += int(request.POST['quantity'])
    return redirect('/checkout')
def checkout(request):
    context = {
        "price" : request.session['price'],
        "total" : request.session['total'],
        "quantity" : request.session['totalquantity']
    }
    return render(request,'amadon/thankyou.html', context)