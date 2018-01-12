from rest_framework.serializers import ModelSerializer
from .models import Event


class EventSerializer(ModelSerializer):
    class Meta:
        model = Event
        fields = ('slug', 'name', 'created_at')
        read_only_fields = ('slug', 'created_at')

