from rest_framework.serializers import ModelSerializer
from .models import Event


class EventSerializer(ModelSerializer):
    class Meta:
        model = Event
        fields = ('slug', 'name', 'created_at')
        read_only_fields = ('slug', 'created_at')


class EventSerializerQuery(EventSerializer):

    class Meta:
        model = Event
        fields = ('name', 'created_at')
        read_only_fields = ('name', 'created_at')
