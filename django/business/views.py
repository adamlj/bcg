from rest_framework import viewsets
from rest_framework import mixins
from rest_framework.permissions import BasePermission

from business import models, serializers


class BusinessMixin(object):
    business = None

    def dispatch(self, request, *args, **kwargs):
        super(BusinessMixin, self).__init__(*args, **kwargs)
        if request.session.get('business_id'):
            self.business = models.Business.objects.get(pk=self.request.session.get('business_id'))
        return super(BusinessMixin, self).dispatch(request, *args, **kwargs)


class OwnsBusiness(BasePermission):
    def has_object_permission(self, request, view, object):
        if view.business and view.business.id == object.id:
            return True
        return False


class BusinessView(BusinessMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.ListModelMixin,
                   mixins.CreateModelMixin, viewsets.GenericViewSet):
    serializer_class = serializers.BusinessSerializer
    queryset = models.Business.objects.all()
    permission_classes = [OwnsBusiness]

    #Todo on create save business id in session if we need to retrieve list of business later

    def get_queryset(self):
        if self.business:
            return self.queryset.filter(id=self.business.id)
        else:
            return self.queryset.none()
