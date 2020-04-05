from rest_framework import serializers
from business import models


class BusinessSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Business
        fields = ('id', 'email', 'details')
        read_only_fields = ('id',)
