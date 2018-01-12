from django.shortcuts import render
from rest_framework import viewsets

from .models import Event
from .serializers import EventSerializer


def index(request):
    return render(request, "index.html")


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def get_queryset(self):
        queryset = None
        event_name = self.request.query_params.get('event_name', None)
        if event_name is not None and len(event_name) >= 2:
            queryset = Event.objects.filter(name__icontains=event_name)
        return queryset

