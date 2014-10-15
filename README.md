# AngularJS course
## Install hints
### General
- Install Git.
- Install NodeJS.
- Change git:// url's to https:// for retrieving npm-packages.
```bash
git config --global url."https://".insteadOf "git://"
```
- Install NodeJS-packages using Node Package Manager (NPM).
```bash
npm install -g grunt
npm install -g karma
npm install -g yo
npm install -g bower
npm install -g generator
npm install -g generator-angular
npm install -g generator-webapp
npm install -g grunt-cli
npm install -g karma-cli
```
- Optionally, clear the npm-cache.
- Add required dependencies to project (from the root of the application).
```bash
npm install
bower install
```
### Unit Testing
- Run the following commands (from the root of the application):
```bash
npm install karma-jasmine --save-dev
npm install karma-phantomjs-launcher --save-dev
npm install grunt-karma --save-dev
```
- After installing and configuring the packages for Unit Testing, run the tests with the following command:
```bash
grunt test
```
### End-To-End Testing
- Install Java (Runtime Environment).
- Run the following commands (from the root of the application):
```bash
npm install -g protractor
npm install -g generator-protractor
```
- Scaffold the protractor template by running the following command:
```bash
yo protractor
```
- Run the following commands:
```bash
webdriver-manager start
protractor protractor.conf.js      or      protractor debug protractor.conf.js
```
### Restify
- Install restify using the command shown below. This package is required for RESTService.js to act as a server. This server allows the application to make AJAX calls using AngularJS. 
```bash
npm install restify
```
- Run the server (RESTservice.js in application root folder) using the following command:
```bash
node RESTService.js 
```
