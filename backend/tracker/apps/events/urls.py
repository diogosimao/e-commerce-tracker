from django.conf.urls import url, include
from rest_framework import routers

from .views import EventViewSet, EventQuerySet

router = routers.SimpleRouter(trailing_slash=False)
router.register('events', EventViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'events_search', EventQuerySet.as_view())
]
