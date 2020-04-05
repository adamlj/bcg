import uuid
from django.db import models
from django.contrib.postgres.fields import JSONField


class Business(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(null=True)
    details = JSONField(null=True)