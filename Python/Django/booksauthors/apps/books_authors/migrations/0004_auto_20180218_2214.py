# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-02-19 06:14
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('books_authors', '0003_auto_20180218_2211'),
    ]

    operations = [
        migrations.RenameField(
            model_name='books',
            old_name='author',
            new_name='author_name',
        ),
    ]
