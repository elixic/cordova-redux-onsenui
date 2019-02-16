This project was set up as a way to experiment with new frameworks.

## Getting Started

### dependencies

You will need yarn, node v >= 8, and cordova v >= 8 installed globally.

### `yarn global add cordova`

If you do not have cordova installed globally, run this command to install it.

### `yarn install`

Run this command from the root of the project

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn build:dev`

This runs webpack with the development flag.

### `yarn build:prod`

This builds the production bundle, while for now it simply sets the webpack mode for production when we get cordova working it should produce bundles for that as well.

## `building and running the cordova app with the ios emulator`

NOTE: This requires xcode 10 be installed

### `yarn install`

Installs all the dependencies for the project

### `yarn build:dev`

Creates the www directory, copies the index.html from public/index.html into it, copies over the fonts used into the www directory, and bundles the js files and puts them into the www directory.

### `cordova platform add ios`

Creates the platforms and plugins directories, installs cordova and other dependencies in the platforms directory, and creates a package-lock.json file.
NOTE: This step fucks up some of our other dependencies and installed modules, requiring us to remove the package-lock.json and run some of our earlier steps over again.

### `rm package-lock.json`

This file will conflict with our yarn.lock and cause yarn install to throw warnings and possibly error. It is created by cordova-fetch, I'm not sure how to fix this yet.

### `yarn install`

Fix the messed up node_modules that cordova-fetch screws up.

### `yarn build:dev`

The project needs to be re-built now with the fixed node_modules

### `cordova run ios`

This will compile and run the ios project in the ios simulator.

## Some resources used to create this project

Much of this code was copied from the onsenui kitchen sink sample application, re-written in typescript, and modified to use redux. That project can be found here; [Onsen UI React Kitchen Sink](https://github.com/OnsenUI/react-onsenui-kitchensink)

The initial project creations was done using the Create React App.
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

The cordova portions of this project were created using this guide and then copying the pieces needed into the onsenui/react app.
To learn more about cordova, check them out here [Apache Cordova Get Started](https://cordova.apache.org/#getstarted)

To learn React, check out the [React documentation](https://reactjs.org/).

To learn Redux, check out the [Redux Getting Started](https://redux.js.org/introduction/getting-started)

To learn more about onsenui, check them out here [Onsenui](https://onsen.io/)

To learn more about webkpack, check them out here [Webpack](https://webpack.js.org/)