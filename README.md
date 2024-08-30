# spring-boot-angular-keycloak-oauth2-demo
Demo for OAuth2 learning.

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

In browser, open [localhost:4200](http://localhost:4200/), and click `Log in` button, it will redirect to Keycloak login page.
Use user/user or manager/manager to login, and back to demo ui. 
You can click `call /api/greet` or `call /api/admin` buttons and check console to see result from demo-api server.

## Credits

* [Blog: OAuth 2 with Spring, Angular, Keycloak – Spring for Resource Server](https://www.angulararchitects.io/en/blog/oauth2-with-spring-angular-keycloak-spring-for-resource-server/)
* [Blog: Securing a Spring Boot REST API with OAuth 2.0, Keycloak, and Angular](https://lucasarcuri.com/blog/securing-a-spring-boot-rest-api-with-oauth-keycloak-angular/)
* [StackOverflow: How configure the JwtAuthenticationConverter for a specific claim structure?](https://stackoverflow.com/a/72301501/6840432)
* [Keycloak JavaScript adapter](https://www.keycloak.org/docs/latest/securing_apps/#_javascript_adapter)
* [keycloak-angular](https://github.com/mauriciovigolo/keycloak-angular)
* [spring-boot](https://github.com/spring-projects/spring-boot)
* [spring-security](https://github.com/spring-projects/spring-security)
* [Angular](https://angular.dev/)
