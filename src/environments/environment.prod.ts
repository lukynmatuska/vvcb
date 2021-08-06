export const environment = {
  production: true,
  backend: {
    api: "https://api.vvcb.cz"
  },
  keycloak: {
    issuer: 'https://auth.vvcb.cz/auth/realms/vvcb',
    redirectUri: 'http://localhost:4200/',
    clientId: 'frontend',
    responseType: 'code',
    scope: 'openid profile email',
    requireHttps: true,
    showDebugInformation: true,
    disableAtHashCheck: true
  }
};
