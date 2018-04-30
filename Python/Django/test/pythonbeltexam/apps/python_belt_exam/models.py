# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Users(models.Model):
    name = models.CharField(max_length = 255)
    username = models.CharField(max_length = 255)
    email = models.CharField(max_length = 255)
    password = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    def __repr__(self):
         return "User: id = {}, name = {}".format(self.id, self.name)
class Destinations(models.Model):
    name = models.CharField(max_length = 255)
class Trip(models.Model):
    destination = models.ForeignKey(Destinations, related_name = "Trips")
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    desc = models.TextField()
    planner = models.ForeignKey(Users, related_name = "planned")
    users = models.ManyToManyField(Users, related_name = "trips")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    def __repr__(self):
         return "Trip: id = {}, destination = {}, start_date = {}, end_date = {}, desc = {}, planner = {}".format(self.id, self.destination.name, self.start_date, self.end_date, self.desc, self.planner.name)
