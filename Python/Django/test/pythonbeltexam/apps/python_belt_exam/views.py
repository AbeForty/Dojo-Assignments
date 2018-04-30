# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from models import *
import re
import bcrypt
from time import localtime, strptime
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
# PASSWORD_REGEX = re.compile(r'^(?=.*\d).{8,}$')
# Create your views here.
def index(request):
    if not 'id' in request.session:
        return render(request, 'python_belt/index.html')
    else:
        return redirect('/travels')
def travel(request):
    if not 'id' in request.session:
        yourTripList = []
        tripList = []
        tripDestinationList = []
        if len(Trip.objects.all()) > 0:
            for i in range(int(Trip.objects.first().id), int(Trip.objects.last().id)+1):
                if len(Trip.objects.filter(id = i)) > 0:
                    if not Trip.objects.get(id = i).destination in tripDestinationList:
                        tripDestinationList.append(Trip.objects.get(id = i).destination)
                        tripList.append(Trip.objects.get(id = i))
                    print Trip.objects.get(id = i).users.all()            
            context = {
                'id': "",
                'name':  "Guest",
                'trips': tripList,
                'yourTrips': yourTripList
            }
            print yourTripList
            print tripList
            return render(request, 'python_belt/trips.html', context)
        else:
            context = {
                'id': request.session['id'],
                'name':  Users.objects.get(id=request.session['id']).username,
            }
            return render(request, 'python_belt/trips.html', context)
    else:
        yourTripList = []
        tripList = []
        tripDestinationList = []
        if len(Trip.objects.all()) > 0:
            for i in range(int(Trip.objects.first().id), int(Trip.objects.last().id)+1):
                if len(Trip.objects.filter(id = i)) > 0:
                    if not Trip.objects.get(id = i).destination in tripDestinationList and len(Trip.objects.filter(id = i, planner = Users.objects.get(id = request.session['id']))) < 1 and len(Trip.objects.get(id = i).users.filter(username = Users.objects.get(id = request.session['id']).username)) == 0:
                        tripDestinationList.append(Trip.objects.get(id = i).destination)
                        tripList.append(Trip.objects.get(id = i))
                    print Trip.objects.get(id = i).users.all()
                if Trip.objects.get(id = i).planner == Users.objects.get(id = request.session['id']) or len(Trip.objects.get(id = i).users.filter(username = Users.objects.get(id = request.session['id']).username)) > 0: 
                    yourTripList.append(Trip.objects.get(id = i))                
            context = {
                'id': request.session['id'],
                'name':  Users.objects.get(id=request.session['id']).username,
                'trips': tripList,
                'yourTrips': yourTripList
            }
            print yourTripList
            print tripList
            return render(request, 'python_belt/trips.html', context)
        else:
            context = {
                'id': request.session['id'],
                'name':  Users.objects.get(id=request.session['id']).username,
            }
            return render(request, 'python_belt/trips.html', context)
def show_travel_add(request):
    if not 'id' in request.session:
        return redirect('/')
    else:
        return render(request, 'python_belt/tripsAdd.html')
def travel_add(request):
    if not 'id' in request.session:
        return redirect('/')
    else:
        if request.method == "POST":
            error = False
            if len(request.POST['destination']) < 1:
                messages.error(request, "Please enter a destination.")
                error = True
            if len(request.POST['description']) == 0:
                messages.error(request, "Please enter an description.")
                error = True            
            if len(request.POST['travelDateFrom']) == "":
                messages.error(request, "Please enter the date your trip begins.")
                error = True
            if len(request.POST['travelDateTo']) == "":
                messages.error(request, "Please enter the date your trip ends.")
                error = True
            if len(request.POST['travelDateFrom']) != "" and len(request.POST['travelDateTo']) != "":
                if strptime(request.POST['travelDateFrom'],"%Y-%m-%d") < localtime():
                    messages.error(request, "Your trip must be in the future.")
                    error = True    
                if strptime(request.POST['travelDateTo'],"%Y-%m-%d") < strptime(request.POST['travelDateFrom'],"%Y-%m-%d"):
                    messages.error(request, "Your trip must end before it starts.")
                    error = True           
            if error:
                return redirect('/travels/add')
            else:
                new_destination = Destinations.objects.create(name = request.POST['destination'])
                Trip.objects.create(destination = new_destination, desc = request.POST['description'], planner = Users.objects.get(id = request.session['id']),start_date = request.POST['travelDateFrom'], end_date = request.POST['travelDateTo'])
                return redirect('/travels')
def destination_show(request, number):
    usersList = []
    my_trip = Trip.objects.get(destination = Destinations.objects.get(id = number))
    for user in my_trip.users.all():
        if not user in usersList:
            usersList.append(user.name)
    if 'id' in request.session: 
        context = {
            "username": request.session['id'],
            "trip": my_trip,
            "users": usersList
        }
    else:
        context = {
            "username": "Guest",
            "trip": my_trip,
            "users": usersList
        }
    return render(request, 'python_belt/destination.html', context)
def join(request, number):
    if not 'id' in request.session:
        return redirect('/')
    else:
        if request.method == "POST":                     
            my_user = Users.objects.get(id=request.session['id'])
            my_trip_object = Trip.objects.get(id=number)
            my_trip_object.users.add(my_user)            
            return redirect('/travels')
def register(request):
    if request.method == "POST":
        error = False
        nameWithoutSpaces = request.POST['name'].replace(" ", "")
        if len(request.POST['name']) < 2: 
            messages.error(request, "Name must be longer than 2 characters.")
            error = True
        if not nameWithoutSpaces.isalpha():
            messages.error(request, "Name must only be alphabetical characters.")
            error = True
        if len(request.POST['username']) < 2:
            messages.error(request, "Username must be longer than 2 characters.")
            error = True
        if len(Users.objects.filter(username = request.POST['username'])) > 0 :
            messages.error(request, "Username is already taken.")
            error = True       
        if len(Users.objects.filter(email = request.POST['email'])) > 0 :
            messages.error(request, "Account already exists with this email.")
            error = True       
        if len(request.POST['password']) < 8:
            messages.error(request, "Password is too short.")
            error = True
        if request.POST['password'] != request.POST['confirm_password']:
            messages.error(request, "Passwords do not match.")
            error = True
        if error:
            return redirect('/')
        else:
            hashedpw = bcrypt.hashpw(request.POST['password'].encode(),bcrypt.gensalt())
            user = Users.objects.create(name = request.POST['name'], username = request.POST['username'], email = request.POST['email'], password = hashedpw)
            request.session['id'] = user.id
    return redirect('/travels')
def login(request):
    if request.method == "POST":
        the_user_list = Users.objects.filter(email = request.POST['email'])
        if len(the_user_list) > 0:
            the_user = the_user_list[0]
        else:
            messages.error(request, "Email or Password incorrect")
            return redirect('/')
        if bcrypt.checkpw(request.POST['password'].encode(), the_user.password.encode()):
            request.session['id'] = the_user.id
            return redirect('/travels')
        else:
            return redirect('/')
    return redirect('/')
def logout(request):
    request.session.flush()
    return redirect('/')