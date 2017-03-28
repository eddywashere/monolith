# monolith

An example of managing multiple [claudia.js](https://claudiajs.com) based services with [lerna](https://lernajs.io) and [yarn](https://yarnpkg.com).

The following services are included and modified from https://github.com/claudiajs/example-projects

- express-app-lambda ([express-app-lambda](https://github.com/claudiajs/example-projects/tree/master/express-app-lambda))
- scheduled-event ([website-email-alert](https://github.com/claudiajs/example-projects/tree/master/website-email-alert))

## Getting Started

### Required Setup

- [Install Yarn](https://yarnpkg.com/en/docs/install)
- [Configure AWS access for claudia.js](https://claudiajs.com/tutorials/installing.html#configuring-access-credentials)

### Install dependencies

Install core dependencies:

```
npm install
```

Install dependencies for all services (all packages in `./services/*`):

```
npm run lerna:bootstrap
```

### Initial Deploys

```
npm run lerna:claudia:create
```

### Register scheduled events

```
npm run lerna:claudia:schedule
```

### Update Lambdas

```
npm run lerna:claudia:update
```

### Destroy Lambdas

```
npm run lerna:claudia:destroy
```

### Test each service

```
npm run lerna:test
```
