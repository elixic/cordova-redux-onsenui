This project was set up as a way to experiment with new frameworks.

## Getting Started

### dependencies

You will need yarn, node v >= 8, and cordova v >= 8 installed globally.

### 'yarn global add cordova'

If you do not have cordova install globally, run this command to install it.

### 'yarn install'

Run this command from the root of the project

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### 'yarn build:dev'

This runs webpack with the development flag.

### `yarn build:prod`

This builds the production bundle, while for now it simply sets the webpack mode for production when we get cordova working it should produce bundles for that as well.

## 'building and running the cordova app with the ios emulator'

NOTE: This requires xcode 10 be installed

### 'yarn install'

Installs all the dependencies for the project

### 'yarn build:dev'

Creates the www directory, copies the index.html from public/index.html into it, copies over the fonts used into the www directory, and bundles the js files and puts them into the www directory.

### 'cordova platform add ios'

Creates the platforms and plugins directories, installs cordova and other dependencies in the platforms directory, and creates a package-lock.json file.
NOTE: This step fucks up some of our other dependencies and installed modules, requiring us to remove the package-lock.json and run some of our earlier steps over again.

### 'rm package-lock.json'

This file will conflict with our yarn.lock and cause yarn install to throw warnings and possibly error. It is created by cordova-fetch, I'm not sure how to fix this yet.

### 'yarn install'

Fix the messed up node_modules that cordova-fetch screws up.

### 'yarn build:dev'

The project needs to be re-built now with the fixed node_modules

### 'cordova run ios'

This will compile and run the ios project in the ios simulator.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

To read about how to reduce bundle sizes for web apps: https://webpack.js.org/guides/code-splitting/
This is probably going to be important if we want to create a pure webapp that can be run on chromebooks.

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
