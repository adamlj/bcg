import os

from django.core.wsgi import get_wsgi_application

env = os.getenv('ENV', 'local')
os.environ.setdefault('DJANGO_SETTINGS_MODULE', f"core.settings")

application = get_wsgi_application()
