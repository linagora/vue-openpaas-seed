import Axios from "axios";
import store from "@/store";

class Api {
  constructor(config = {}) {
    this.client = Axios.create(config);

    this.client.defaults.baseURL = config.baseURL;
    this.client.interceptors.request.use(config => {
      config.headers.Authorization = `Bearer ${store.state.session.jwtToken}`;

      return config;
    });
  }
}

export { Api };
