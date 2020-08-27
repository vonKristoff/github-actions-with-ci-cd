# github-actions-cicd

### Typescript and Rollup ES6 2020
New project kickstarter start with `js/main.ts` 

    npm start



Watch will compile TS to ES6, and then Rollup will bundle the rest of the application.



* RxJs included
* includes VSC editor config
* ESlint and Prettier
* Stylus for CSS
* Pug for HTML templates
* Vue | Soon to switch to Svelte 👀
* Enzyme and Jest for tests
* Works with React



### other notes

* `async.js` - allows css scripts to be loaded in async via the `link rel=preload as=style`

* `ENV variables` are available, see `npm run production` and in `js/main.js`. Also `rollup.config.js` detects `ENV` and `uglifies` where applicable.

* `buble` deprecated

  

---
