# delavega-app

A small React v17/Redux v7 application with the minimum set of dependencies. The generated code is not transpiled, so it is performed to run in modern browsers (Webkit based).

It depends on a small litElement components library, published in npm registry, called as
<a href="https://www.npmjs.com/package/delavega-lib" target="_blank">delavega-lib</a> (version 0.1.0 is the published version) and its <a href="https://github.com/madelavega/delavega-app"
target="_blank">Github repository here</a>

The application integrates web componentes wrapped by react 17.

To test it, you can access in the repository github page <a href="https://madelavega.github.io/delavega-app" target="_blank">clicking here</a>,
(The application is deployed when the deploys branch receives a commit, using Github Actions)

**Note**: When a date is selected, the application does a real http request, but the request gets a static json file, because I haven't access to the real one. But
the service could be changed easily, in the config/services.js file. Anyway, the request can be checked in the network and the files involved into the requests are the following:
- /src/utils/Api.js :utils to manage the requests
- /src/EuroJackpotResults/sagas.js : it does the request
- /src/errors/middleware.js : Redux middleware to manage HTTP request errors
- /config/**/services.js : set the url services depending of the target environment (production/development, but at the moment both are the same)

## Local installation

### Requeriments

- npm v7+ (Recomended if you want to use npm workspaces to work in your local environment with the app and its dependency as we see later)
- node v14+ (to change node version, I recommend to use node version manager <a href="https://github.com/nvm-sh/nvm" target="_blank">nvm</a>

```
nvm install v14.15.5
nvm use v14
npm install -g npm@7.5.4
```

### installing delavega-app alone

You only need to clone the repository and execute the npm install. Then, you only need to start the application.

```
git clone https://github.com/madelavega/delavega-app.git
cd delavega-app
npm i 
```

when installation finish

```
npm start
```

It will be served using webpack 5 in the development mode, getting the configuration from the /config/development folder. By defult, it will be served at http://localhost:8000

To run the tests, please run

```
npm test
```

You could also make a production build, getting the configuration from the /config/prodionuct folder
```
npm run build
```

### installing delavega-app and delavega-lib into a npm workspace

You need to create a new directory with a package.json like this

```javascript
{
  "name": "delavega-workspace",
  "workspaces": [
    "delavega-app",
    "delavega-lib"
  ]
}

```
And it's all! now, you can clone two repositories:

```
git clone https://github.com/madelavega/delavega-app.git
git clone https://github.com/madelavega/delavega-lib.git

```

It will avoid to use npm link references. See more details <a href="https://docs.npmjs.com/cli/v7/using-npm/workspaces" target="_blank">here</a>

just execute **npm install** in the workspace root directory, and the internal dependencies will be resolved
(delavega-lib/package.json version must be matched with the elavega-app/package.json delavega-lig dependency)

Yo can run the application or their tests like this:

```
cd delavega-app
npm test
npm start

```

You could also run the delavega-lib tests, but in this case, you will need to install the delavega-lib dependencies inside its directory, because the testint
based on karma could not resolve the dependencies correctly. But the bundle could be build withoud any problem

```
cd delavega-lib
npm run bundle

rm -rf ../node_modules
npm install
npm test

```

