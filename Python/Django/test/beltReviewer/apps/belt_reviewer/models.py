# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
class Users(models.Model):
    name = models.CharField(max_length = 255)
    alias = models.CharField(max_length = 255)
    email = models.CharField(max_length = 255)
    password = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
class Authors(models.Model):
    name = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
class Books(models.Model):
    title = models.CharField(max_length = 255)
    author = models.ForeignKey(Authors, related_name = "books")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
class Reviews(models.Model):
    rating = models.IntegerField()
    review = models.TextField()
    book = models.ForeignKey(Books, related_name = "reviews")
    user = models.ForeignKey(Users, related_name = "reviews")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    def __repr__(self):
        return "Review: id = {}, rating = {}, review = {}, book = {}, user = {}".format(self.id, self.rating, self.review, self.book, self.user.name)