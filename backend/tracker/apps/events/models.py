from django.db import models


class TimestampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        abstract = True
        ordering = ['-created_at']


class Event(TimestampedModel):
    slug = models.SlugField(db_index=True, max_length=255, unique=True)
    name = models.CharField(max_length=20, blank=False)

    def __str__(self):
        return "{} - {}".format(self.name, self.created_at)

    class Meta:
        ordering = ('name',)
