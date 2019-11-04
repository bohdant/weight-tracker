# React-TypeScript

Initial run:

* Install Node.js
* `yarn`
* `yarn start`

Breif overiview of the codebase:
* Why mobx - in fact just used a possibility to play aroud with new-old library. But it does the same think - manage global state and incapsulate state operations. It also a bit cleaner and has less syntax noise like dozens of readucers and so on. + developers of mobx says that it's quite optimized and update
only those components which have to be updated, as opposed to rerunning whole tree render mathods in order to copmare how virtual dom tree is changed compared to previous state - what happens in redux
* Why 2 stores - it could be usefull to have separte domain store, so we can f.x easy implement
transpoartion layer for CRUD operations. It's also easier to test domain and ui store

TODO:
* introduce container for RegistrationLineChart a
* introduce test and refactor existing code
* implement more features (selecting row on registration list - select chart point, etc)
* move out styles from components and make it more beautifull :)
* improve webpack configuration
* introduce transport layer - so send measurements to server


P.s. In order to complete everything, including authorization, backend,better loook and so on - it can take weeks of full time work :)


For simplicity sake Webpack Hot Module Reloading is disabled. If you want to use HMR, see the [Reactive2015 demo](https://github.com/mobxjs/mobx-reactive2015-demo) to see a valid setup.