from django.shortcuts import render
from django.db.models import Count
from django.db.models.functions import TruncMonth, TruncDay, TruncYear
from rest_framework import viewsets, exceptions, generics

from .models import Event
from .serializers import EventSerializer, EventGroupSerializer
from .renderers import EventQueryJSONRenderer


def index(request):
    return render(request, "index.html")


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventQuerySet(generics.ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventGroupSerializer
    renderer_classes = (EventQueryJSONRenderer,)

    def get_queryset(self):
        queryset = None
        event_name = self.request.query_params.get('event_name', None)
        if event_name is not None and len(event_name) >= 2:
            queryset = Event.objects.filter(name__icontains=event_name)
        else:
            raise exceptions.ParseError("Event name not supplied")

        event_group = self.request.query_params.get('event_group', None)
        if event_group is not None:
            if event_group == '1':
                period_filter = {'day': TruncDay('created_at')}
            if event_group == '2':
                period_filter = {'week': TruncWeek('created_at')}
            if event_group == '3':
                period_filter = {'month': TruncMonth('created_at')}
            if event_group == '4':
                period_filter = {'year': TruncYear('created_at')}

            queryset = queryset.values('name',)\
                .annotate(event_count=Count('name'), **period_filter)

        return queryset

