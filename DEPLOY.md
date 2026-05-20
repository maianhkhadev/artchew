# Deploy with Manual Build and Docker Compose

Build the two projects first:

```sh
npm run build:docker
```

Then start the containers:

```sh
npm run docker:up
```

The services are exposed as:

- FE: `http://localhost:4200`
- BE: `http://localhost:3000`

The browser calls the FE at `/api/*`. The FE runtime proxies those requests to the BE container through:

```env
API_INTERNAL_URL=http://api:3000
```

For another deploy target, keep FE requests on `/api` and change only `API_INTERNAL_URL` in `docker-compose.yml` or the container environment.

SQLite data is stored in the Docker volume `sqlite-data` at:

```env
SQLITE_DB_PATH=/data/artchew.sqlite
```

To stop the services:

```sh
npm run docker:down
```
