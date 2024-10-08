import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public title = 'demo-ui';
  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;

  constructor(private http: HttpClient, private readonly keycloak: KeycloakService) {}

  public async ngOnInit() {
    console.log("ngOnInit()")
    this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
    } else {
      console.log(" Not logged in yet");
    }
  }

  public login() {
    this.keycloak.login();
  }

  public logout() {
    this.keycloak.logout();
  }

  public greet() {
    this.http.get<string>("http://localhost:8088/api/greet").subscribe({
      next: succ => {
        console.log(succ);
      },
      error: err => {
        console.error(err);
      }
    })
  }

  public admin() {
    this.http.get<string>("http://localhost:8088/api/admin").subscribe({
      next: succ => {
        console.log(succ);
      },
      error: err => {
        console.error(err);
      }
    })
  }
}
