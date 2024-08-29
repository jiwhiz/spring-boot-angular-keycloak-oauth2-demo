# spring-boot-angular-keycloak-oauth2-demo
Demo for OAuth2 learning

## Local Test

Use Docker to setup local test environment with Keycloak. Run
```
docker compose up -d
```

Start Demo API server, under ./demo-api directory, run
```
./gradlew bootRun
```

Start Demo UI, under ./demo-ui directory, run
```
ng serve
```

In browser, open `http://localhost:4200/`, and click `Log in` button, it will redirect to Keycloak login page.
Use user/user or manager/manager to login, and back to demo ui. 
You can click `call /appi/greet` or `call /api/admin` buttons and check console.