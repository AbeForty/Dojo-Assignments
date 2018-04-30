# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from models import *
import re
import bcrypt
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
# PASSWORD_REGEX = re.compile(r'^(?=.*\d).{8,}$')
# Create your views here.
def index(request):
    # request.session.flush()
    if not 'id' in request.session:
        return render(request, 'belt_reviewer/index.html')
    else:
        return redirect('/books')
def books(request):
    if not 'id' in request.session:
        return redirect('/')
    else:
        # if len(Reviews.objects.all()) > 0:             
        reviewList = []
        otherBooksList = []
        bookTitleList = []
        # endReviewListInt = 0
        if len(Reviews.objects.all()) > 0:
            # if len(Reviews.objects.all()) >= 4:
            #     endReviewListInt = 4
            # else:
            #      endReviewListInt = Reviews.objects.last().id
            increment = 1
            for i in range(int(Reviews.objects.first().id), int(Reviews.objects.last().id)+1):
                if len(Reviews.objects.filter(id = i)) > 0:
                    if increment > 4:
                        if not Reviews.objects.get(id = i).book.title in bookTitleList:
                            bookTitleList.append(Reviews.objects.get(id = i).book.title)
                            otherBooksList.append(Reviews.objects.get(id = i))
                    if increment <= 4: 
                        if not Reviews.objects.get(id = i).book.title in bookTitleList:  
                            bookTitleList.append(Reviews.objects.get(id = i).book.title)
                            reviewList.append(Reviews.objects.get(id = i))
                    increment += 1
        # print type(ratingRange)
        context = {
            'id': request.session['id'],
            'alias':  Users.objects.get(id=request.session['id']).alias,
            'reviews': reviewList,
            'otherbooks': otherBooksList
        }
        return render(request, 'belt_reviewer/books.html', context)
        # else:
        #     return render(request, 'belt_reviewer/books.html')
def show_add_books(request):
    if not 'id' in request.session:
        return redirect('/')
    else:
        context = {

        }
        if len(Authors.objects.all()) > 0:
            context = {
                'authors': Authors.objects.all()
            }        
        return render(request, 'belt_reviewer/add_books.html', context)
def add_books(request):
    if not 'id' in request.session:
        return redirect('/')
    else:
        if request.method == "POST":
            error = False
            if len(request.POST['title']) < 1:
                messages.error(request, "Please enter a title.")
                error = True
            if len(request.POST['author']) == 0:
                if request.POST['author_name'] == None:
                    messages.error(request, "Please select or enter an author.")
                    error = True            
            if len(request.POST['review']) == 0:
                messages.error(request, "Please enter a review.")
                error = True       
            if error:
                return redirect('/books/add')
            else:
                my_author = None
                if len(request.POST['author']) > 0:
                    my_author = Authors.objects.create(name = request.POST['author'])
                else:
                    my_author = Authors.objects.get(name = request.POST['author_name'])
                if len(Books.objects.filter(title = request.POST['title'], author = my_author)) > 0:
                    # messages.error(request, "Book already exists. Please add review to corresponding book page.")
                    # error = True  
                    # return redirect('/books/add')
                    new_book = Books.objects.get(title = request.POST['title'], author = my_author)
                else:
                    new_book = Books.objects.create(title = request.POST['title'], author = my_author)
                Reviews.objects.create(rating = request.POST['rating'], review = request.POST['review'], book = new_book, user = Users.objects.get(id = request.session['id']))
                return redirect('/books')
def add_review(request, number):
    if not 'id' in request.session:
        return redirect('/')
    else:
        if request.method == "POST":
            error = False
            my_book = Books.objects.get(id = number)        
            if len(request.POST['review']) == 0:
                messages.error(request, "Please enter a review.")
                error = True       
            if error:
                return redirect('/books/add')
            else:             
                Reviews.objects.create(rating = request.POST['rating'], review = request.POST['review'], book = my_book, user = Users.objects.get(id = request.session['id']))
        return redirect('/books/' + str(number))
def delete_review(request, number):
    if not 'id' in request.session:
        return redirect('/')
    else:
        if request.method == "POST":
            review_book_id = Reviews.objects.get(id = number).book.id
            Reviews.objects.get(id = number).delete()
            return redirect('/books/' + str(review_book_id))
def show_book(request,number):
    if not 'id' in request.session:
        return redirect('/')
    else:
        # if len(Reviews.objects.all()) > 0:             
        reviewList = []
        if len(Reviews.objects.all()) > 0:       
            for review in Reviews.objects.all():
                if review.book.id == int(number):
                    reviewList.append(review)
        # ratingRange = range(1,5)
        context = {
            'id': request.session['id'],
            'title':  Books.objects.get(id=number).title,
            'author':  Books.objects.get(id=number).author.name,
            'book_id': number,
            'reviews': reviewList
        }
        return render(request, 'belt_reviewer/book.html', context)
        # else:
        #     return render(request, 'belt_reviewer/books.html')
def show_user(request, number):
    if not 'id' in request.session:
        return redirect('/')
    else:
        my_user = Users.objects.get(id = number)         
        bookList = []
        bookTitleList = []
        for review in Reviews.objects.filter(user=Users.objects.get(id=number)):
            if not review.book.title in bookTitleList:
                bookTitleList.append(review.book.title)
                bookList.append(review.book)
        # ratingRange = range(1,5)
        context = {
            'alias':  my_user.alias,
            'name':  my_user.name,
            'email':  my_user.email,
            'books': bookList
        }
        return render(request, 'belt_reviewer/user.html', context)
        # else:
        #     return render(request, 'belt_reviewer/books.html')
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
        if len(request.POST['alias']) < 2:
            messages.error(request, "Alias must be longer than 2 characters.")
            error = True
        if len(Users.objects.filter(alias = request.POST['alias'])) > 0 :
            messages.error(request, "Alias is already taken.")
            error = True       
        if len(Users.objects.filter(email = request.POST['email'])) > 0 :
            messages.error(request, "Account already exists with this email.")
            error = True       
        if len(request.POST['password']) < 8:
            messages.error(request, "Password is too short or does not contain at least one number.")
            error = True
        if request.POST['password'] != request.POST['confirm_password']:
            messages.error(request, "Passwords do not match.")
            error = True
        if error:
            return redirect('/')
        else:
            hashedpw = bcrypt.hashpw(request.POST['password'].encode(),bcrypt.gensalt())
            user = Users.objects.create(name = request.POST['name'], alias = request.POST['alias'], email = request.POST['email'], password = hashedpw)
            request.session['id'] = user.id
    return redirect('/books')
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
            return redirect('/books')
        else:
            return redirect('/')
    return redirect('/')
def logout(request):
    request.session.flush()
    return redirect('/')