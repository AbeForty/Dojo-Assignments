from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^main$', views.index),
    url(r'^$', views.index),
    url(r'^travels$', views.travel),
    url(r'^travels/add$', views.show_travel_add),
    url(r'^travels/join/(?P<number>\d+)$', views.join),
    url(r'^travels/process$', views.travel_add),
    url(r'^travels/destinations/(?P<number>\d+)$', views.destination_show),
    url(r'^register$', views.register),
    url(r'^login$', views.login),
    url(r'^logout$', views.logout),
]
