# vue-openpaas-seed

This project is a 'seed' to be used to create other OpenPaaS web application using Vue.
It provides the layout and some basic components to start coding within minutes. Documentation is available on [http://docs.open-paas.org/frontend/vue/](http://docs.open-paas.org/frontend/vue/)

The seed has been developed using Node 10, please use at least the same.

## Project configuration

You can update the `.env` file to define the OpenPaaS instance to reach, or override it in a new `.env.development.local` file. Current environment variables are:

- `VUE_APP_OPENPAAS_URL`: route to your OpenPaaS instance. Needs to be `http://localhost:8080` in development mode.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

## Docker

### Build

Before building the image for production, you will have to configure it from an environment file. By default, [vue-cli](https://cli.vuejs.org/) (used by `npm run build`) will set the `NODE_ENV` to production on build step. In order to define production environment values, you will have to create a `.env.production.local` file at the root or the repository and set the required values (copy, paste and adapt `.env` file properties). Once done, you can build the image like:

```
docker build -t linagora/vue-openpaas-seed .
```

### Run

```
docker run -it -p 8888:80 --rm --name vue-openpaas-seed linagora/vue-openpaas-seed
```

In order to define the OpenPaaS endpoint to use (override the `VUE_APP_OPENPAAS_URL` variable from `.env*` files), the `public/env/openpaas.js` file has to be updated. In order to do this, a Docker volume is available in the container and the `openpaas.js` file can be redefined by mounting a volume. By using this, the image is generated once, and can be used in multiple application deployments.

```
docker run -it -p 8888:80 --rm --name vue-openpaas-seed -v $PWD/.config/env:/usr/share/nginx/html/env linagora/vue-openpaas-seed
```
