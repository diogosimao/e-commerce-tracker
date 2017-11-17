from django.conf.urls import url, include
from rest_framework import routers

from tracker.apps.events.views import EventViewSet, QueryViewSet

router = routers.SimpleRouter(trailing_slash=False)
router.register('events', EventViewSet)
router.register('eventssearch', QueryViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
