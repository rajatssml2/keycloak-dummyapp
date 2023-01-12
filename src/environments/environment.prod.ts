export const environment = {
  baseUrl: 'https://staging.digit.org/',
  tenantId: 'pb',
  production: true,
  keycloak: {
    issuer: "https://idsvr4.azurewebsites.net",
    redirectUri: window.location.origin + '/index.html',
    clientId: "spa",
    scope: "openid profile email offline_access api"

  }
};
