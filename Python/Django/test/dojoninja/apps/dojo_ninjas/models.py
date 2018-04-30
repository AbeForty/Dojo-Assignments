# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class dojos(models.Model):
    name = models.CharField(max_length = 255)
    city = models.CharField(max_length = 255)
    state = models.CharField(max_length = 2)
    desc = models.CharField(max_length = 255)
    def __repr__(self):
        return "Dojo: Name = {}, City = {}, State = {},  Description = {}".format(self.name, self.city, self.state, self.desc )
class ninjas(models.Model):
    dojo_id = models.ForeignKey(dojos, related_name = "dojo")
    first_name = models.CharField(max_length = 255) 
    last_name = models.CharField(max_length = 255)
    def __repr__(self):
        return "User: dojo id = {}, first = {}, last = {}".format(self.dojo_id, self.first_name, self.last_name)