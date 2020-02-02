# app

### Start dev environment
```
docker-compose up -d
```
and open http://localhost:8080

### Compiles and minifies for production
```
docker-compose exec ui yarn build
```

### Run your tests
```
docker-compose exec ui yarn test
```

### Lints and fixes files
```
docker-compose exec ui yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
