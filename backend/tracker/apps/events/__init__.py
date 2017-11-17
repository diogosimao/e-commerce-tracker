from django.apps import AppConfig


class EventsAppConfig(AppConfig):
    name = 'tracker.apps.events'
    label = 'events'
    verbose_name = 'Events'

    def ready(self):
        import tracker.apps.events.signals


default_app_config = 'tracker.apps.events.EventsAppConfig'