from datetime import datetime

from rest_framework import renderers
from babel.dates import format_date


class EventQueryJSONRenderer(renderers.JSONRenderer):
    def render(self, data, accepted_media_type=None, renderer_context=None):
        new_rows = []

        for obj in data:
            if obj.get('day', None):
                datetime_object = datetime.strptime(obj.get('day')[:10], '%Y-%m-%d')
                obj['day'] = format_date(datetime_object, 'DD', locale='en')
            if obj.get('week', None):
                datetime_object = datetime.strptime(obj.get('week')[:-1], '%Y-%m-%d-%w')
                obj['week'] = format_date(datetime_object, 'WW', locale='en')
            if obj.get('month', None):
                datetime_object = datetime.strptime(obj.get('month')[:10], '%Y-%m-%d')
                obj['month'] = format_date(datetime_object, 'MMMM', locale='en')
            if obj.get('year', None):
                datetime_object = datetime.strptime(obj.get('year')[:10], '%Y-%m-%d')
                obj['year'] = format_date(datetime_object, 'YYYY', locale='en')
            new_rows.append(obj)

        data = new_rows
        response_data = data
        response = super(EventQueryJSONRenderer, self).render(response_data, accepted_media_type, renderer_context)

        return response

