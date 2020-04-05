FROM python:3.7-slim

RUN pip install -U pipenv
WORKDIR /opt/django
RUN apt-get update

RUN apt-get -y install libpq-dev gcc musl-dev


COPY Pipfile* ./
RUN pipenv install --system --deploy

COPY . .

CMD ["./docker-entrypoint.sh"]
