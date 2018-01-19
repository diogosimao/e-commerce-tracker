from datetime import datetime

from rest_framework import renderers
from babel.dates import format_date


class EventQueryJSONRenderer(renderers.JSONRenderer):
    def render(self, data, accepted_media_type=None, renderer_context=None):
        new_rows = []

        # Name the object list
        for obj in data:
            if obj.get('month', None):
                datetime_object = datetime.strptime(obj.get('month')[:10], '%Y-%m-%d')
                obj['month'] = format_date(datetime_object, 'MMMM', locale='pt_br')
            new_rows.append(obj)

        data = new_rows
        response_data = data
        response = super(EventQueryJSONRenderer, self).render(response_data, accepted_media_type, renderer_context)

        return response

