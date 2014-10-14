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
npm install -g protractor
npm install -g generator
npm install -g generator-angular
npm install -g generator-webapp
npm install -g generator-protractor
npm install -g grunt-cli
npm install -g karma-cli
```
- Optionally, clear the npm-cache.
- Add required dependencies to project.
```bash
npm install
bower install
```
### Unit Testing
- Run the following commands:
```bash
npm install karma-jasmine --save-dev
npm install grunt-phantomjs-launcher --save-dev
npm install grunt-karma --save-dev
```
- After installing and configuring the packages for Unit Testing, run the tests with the following command:
```bash
grunt test
```
