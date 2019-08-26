import ApplicationSettings from "@/services/application-settings";

const DEFAULTS = Object.freeze({
  authority: "http://localhost:8888/auth/realms/master",
  clientId: "openpaas-seed",
  redirectUri: "http://localhost:8081/oidc-callback",
  postLogoutRedirectUri: "http://localhost:8081/login",
  responseType: "id_token token",
  scope: "openid email profile"
});

const config = Object.assign({}, { ...DEFAULTS, ...ApplicationSettings.oidc });

export default config;
