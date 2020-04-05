# Business Crisis Guide
Business Crisis Guide helps entrepreneurs in, starting with, Sweden navigate the help packages released by our governments.

We are planning to build similar guides for all EU countries in this project.

## How to run
First we need to add local .env files. 
For local setup create a file in project root called .local.env with below keys and make sure to set their properties:

```dotenv
DJANGO_SECRET_KEY=
POSTGRES_DB=
POSTGRES_USER=
POSTGRES_PASSWORD=
DB_HOST=postgres
DB_PORT=5432
DJANGO_DEBUG=True
```

After creating the .env file we can start the project with
```bash
docker-compose -f docker-compose.yml -f local.yml
```

This will start containers with PostgreSQL, Django API, Nginx reverse proxy and the React App.
You can visit the project at http://localhost