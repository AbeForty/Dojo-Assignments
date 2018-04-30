# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class authors(models.Model):
    first_name = models.CharField(max_length = 255) 
    last_name = models.CharField(max_length = 255)
    email = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    def __repr__(self):
        return "Author: first = {}, last = {}, email = {}".format(self.first_name, self.last_name, self.email)
class books(models.Model):
    name = models.CharField(max_length = 255)
    desc = models.TextField()
    author = models.ManyToManyField(authors, related_name = "author")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    def __repr__(self):
        return "Book: Name = {}, Description = {}".format(self.name, self.desc)
