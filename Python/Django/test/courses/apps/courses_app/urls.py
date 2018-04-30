from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index),
    url(r'^courses_app$', views.index),   
    url(r'^courses_app/add_course$', views.add_course),     
    url(r'^courses_app/(?P<number>\d+)/destroy$', views.destroy),
    url(r'^courses_app/(?P<number>\d+)/confirm_delete$', views.confirm_delete), 
]