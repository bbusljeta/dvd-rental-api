Prerequisites:

- Docker [account](https://hub.docker.com/signup)
- Docker [Desktop](https://www.docker.com/products/docker-desktop/)

Update database env vars:

```
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_PORT=
```

Run Docker (this will download the postgres image)

```
docker compose up
```

## Run migrations

```bash
$ npx sequelize-cli db:migrate
```

## Seeding data

```bash
$ npx sequelize-cli db:seed:all
```
