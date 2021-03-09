# Vue 3 Cypress Example (JS)
This project is a Vue 3 + Vue CLI boilerplate for the _private release_ of Cypress Component Testing.

A larger, TS example can be found [here](https://github.com/elevatebart/calc)

## Features
✨ Browser-based TDD for Components

✨ Watch mode

✨ Real Browser API

✨ Polyfill-free

✨ First-class Network Stubbing

✨ Webpack-based, uses the user-provided config

## Cypress Setup
```shell
  yarn install
  
  yarn tdd # Interactive Mode

  ## CI mode is currently SLOW because it restarts the browser
  ## The next release speeds up this time by > 200% and reuses the browser instance
  yarn ci # Run mode
```

### Usage
1. Use the DOM to make assertions.
2. Syntax _extends_ Vue Test Utils
3. You are able to use Vue CLI to mount with emit + spies, using normal test strategies
4. There is no concept of shallow mount. Stub heavy components using Vue Test Utils if you must.

## Project Structure
1. cypress.json is configured to find spec files underneath src/**/*.spec.*
2. This example is configured for JS
  1. TS support works but this boilerplate does not have it. See the [example](https://github.com/elevatebart/calc)

## Project setup
When working without Component Tests, doing normal app-level development

```sh
yarn install
```

### Compiles and hot-reloads for development
```sh
yarn serve
```

### Compiles and minifies for production
```sh
yarn build
```

### Lints and fixes files
```sh
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
