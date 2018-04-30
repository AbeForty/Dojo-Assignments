from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index),
    url(r'^books$', views.books),
    url(r'^register$', views.register),
    url(r'^books/add$', views.show_add_books),
    url(r'^books/process$', views.add_books), 
    url(r'^books/(?P<number>\d+)$', views.show_book),  
    url(r'^users/(?P<number>\d+)$', views.show_user),
    url(r'^addReview/(?P<number>\d+)$', views.add_review),    
    url(r'^deleteReview/(?P<number>\d+)$', views.delete_review),    
    url(r'^login$', views.login),
    url(r'^logout$', views.logout),
]