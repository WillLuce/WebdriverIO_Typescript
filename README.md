# WebdriverIO_Typescript
This directory contains the WebdriverIO page object example written using TypeScript. The usefullness of the page object pattern is discussed on the [WebdriverIO website](http://webdriver.io/guide/testrunner/pageobjects.html).

## Getting Started
```
npm install
npm test
```

Typings for most libraries are availible from the [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) project and, since the release of TypeScript 2.0, can be installed via `npm`. For example
```
npm install @types/webdriverio
```
## Pages From Objects to Classes
Each page is a [class](http://www.typescriptlang.org/docs/handbook/classes.html) (mainly because it helps the intellisense) which is instantiated and exported.
```
class Login_Page {

    public get username()  { return browser.element('#username') }
    public get password()  { return browser.element('#password') }
    public get form()      { return browser.element('#login') }
    public get flash()     { return browser.element('#flash') }

    public open(): void {
        browser.url('/login')
    }
    public submit(): void {
        this.form.submitForm()
    }

}
const LoginPage = new Login_Page()
export default LoginPage
```

## Running Tests
The WebdriverIO Test Runner still needs `.js` files to test, so we modify the `npm test` script to compile the `.ts` files into a `/src` directory, then run the tests from there. Then, `rimraf` is used to delete the `/src` directory so as to not clutter up the working space.
```
"scripts": {
  "test": "node ./node_modules/typescript/lib/tsc.js && node_modules/webdriverio/bin/wdio && node_modules/rimraf/bin.js src"
}
```
Notice that the `wdio.config.json` file knows to look in `/src` for specs
```
specs: [
    './src/specs/*.js'
],
```

## Run a single test
```
node ./node_modules/typescript/lib/tsc.js && ./node_modules/webdriverio/bin/wdio --spec=/specs/home.spec.js
```
