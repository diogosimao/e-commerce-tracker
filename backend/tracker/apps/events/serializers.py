from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import Event


class EventSerializer(ModelSerializer):
    class Meta:
        model = Event
        fields = ('slug', 'name', 'created_at',)
        read_only_fields = ('slug', 'created_at')


class EventGroupSerializer(ModelSerializer):
    event_count = serializers.IntegerField(read_only=True,)
    month = serializers.DateTimeField(read_only=True)

    class Meta:
        model = Event
        fields = ('name', 'month', 'event_count', )
        read_only_fields = ('name', 'month', 'event_count',)

