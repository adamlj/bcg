from django.conf.urls import url
from rest_framework.routers import SimpleRouter
from business import views


router = SimpleRouter()
router.register(r'business', views.BusinessView)

urlpatterns = router.urls
