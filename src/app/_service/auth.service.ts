import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private keycloakService: KeycloakService) { }
  getLoggedUser() {
    try {
      let userDetails = this.keycloakService.getKeycloakInstance().idTokenParsed;
      console.log("userDetails==",userDetails);
      console.log("user roles==", this.keycloakService.getUserRoles());
      return userDetails;
    } catch (error) {
      console.log("getLoggedUser Exception", error);
      return undefined;
    }
  }

  logOut() {
    // this.keycloakService.logout();

    // var logoutOptions:any = { redirectUri : environment.keycloak.logoutUri };
 
    this.keycloakService.logout(environment.keycloak.logoutUri).then((success:any) => {
            console.log("--> log: logout success ", success );
    }).catch((error:any) => {
            console.log("--> log: logout error ", error );
    });
  }
}
