const ApplicationSettings = Object.freeze({
  ...{ BASE_URL: "/", VUE_APP_OPENPAAS_URL: "http://localhost:8080" },
  ...process.env,
  ...window.openpaas
});

export default ApplicationSettings;
