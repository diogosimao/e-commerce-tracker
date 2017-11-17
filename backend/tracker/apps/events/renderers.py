from rest_framework.renderers import JSONRenderer


class EventJSONRenderer(JSONRenderer):

    def render(self, data, accepted_media_type=None, renderer_context=None):
        new_data = {'events': data}
        return super(EventJSONRenderer, self).render(new_data, accepted_media_type, renderer_context)

