# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-02-19 19:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books_authors', '0004_auto_20180218_2214'),
    ]

    operations = [
        migrations.AddField(
            model_name='authors',
            name='notes',
            field=models.TextField(default='Engineers at Village88.com'),
            preserve_default=False,
        ),
    ]
