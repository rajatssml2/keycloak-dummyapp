import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakLoginOptions } from 'keycloak-js';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userDetails:any;
  keycloakLoginOptions: KeycloakLoginOptions = {
    redirectUri: environment.keycloak.redirectUri
  }

  constructor(private authService: AuthService, private keycloakService: KeycloakService) {}
  ngOnInit(): void {
    this.userDetails = this.authService.getLoggedUser();
    console.log("this.userDetails=",this.userDetails)
  }
  login() {
    this.keycloakService.login(this.keycloakLoginOptions);
  }
  logout() {
    this.authService.logOut();
  }
  get token() {
    let token:any = this.authService.getLoggedUser();
    console.log("token==",token)
    return  token ? token : null;
  }
}
