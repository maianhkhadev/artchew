# Lenh deploy

## 1. Pull code moi

```sh
git pull origin develop
```

## 2. Cai dependencies

```sh
npm install
```

## 3. Build backend

```sh
npx nx build apigee
```

## 4. Build frontend

```sh
npx nx build artchew
```

## 5. Chay Docker

```sh
docker-compose down --rmi all --volumes --remove-orphans
docker system prune -a -f
docker compose up -d --build
```

## 6. Restart nginx

```sh
sudo systemctl restart nginx
```

## 7. Kiem tra containers

```sh
docker compose ps
```

## 8. Xem logs

```sh
docker compose logs -f
```
