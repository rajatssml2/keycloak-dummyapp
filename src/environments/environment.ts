// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  baseUrl: 'https://staging.digit.org/',
  tenantId: 'pg',
  production: false,
  keycloak: {
    issuer: "http://localhost:8080/",
    // "http://localhost:8080/realms/enhanced-digit",
    redirectUri: "http://localhost:4300/dashboard",
    logoutUri: "http://localhost:4300",
    clientId: "e-digit",
    relam: 'enhanced-digit',
    scope: "openid profile email offline_access"

  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
