from django.conf.urls import url
from . import views           # This line is new!
urlpatterns = [
  url(r'^$', views.index),     # This line has changed!
  url(r'^generate$', views.generate),     # This line has changed!
  url(r'^render$', views.render_word)     # This line has changed!
]