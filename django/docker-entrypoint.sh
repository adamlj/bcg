#!/bin/bash

# Collect static files
echo "Collect static files"
python manage.py collectstatic --noinput

if [ "$IS_PRODUCTION" = "true" ]
then
    # Apply database migrations
    echo "Apply database migrations"
    python manage.py migrate --noinput || exit 1
    exec "$@"

    # Start server
    echo "Starting server"
    gunicorn core.wsgi:application --bind 0.0.0.0:8000 --workers=5 --error-logfile -
else
    # Apply database migrations
    echo "Apply database migrations"
    ./bin/wait_for.sh postgres:5432

    python manage.py migrate --noinput || exit 1
    exec "$@"

    # Start server
    echo "Starting server"
    python manage.py runserver 0.0.0.0:8000
fi

