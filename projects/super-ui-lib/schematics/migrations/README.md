# Ng-update 

Configure your library to automatically be upgraded when a user runs the ng update command.
<div>
<p><img src="https://imgur.com/8z1wkiq.png" alt="Scaffold files for ng update" width="800"></p>
</div>

## Development server

for a dev server. Navigate to `http://localhost:4873/`. The application will automatically reload if you change any of the source files.
<div>
  <p><img src="https://imgur.com/SiimNUv.png" alt="Scaffold files for verdaccio" width="800"></p>
</div>

## Tutorial: Getting Started

 1. Install super-ui-lib to your application `ng add super-ui-lib` if you install it from local registery (verdaccio) `ng add super-ui-lib --registery http://localhost:4873/ `and after that
Run `ng update super-ui-lib` to update your library to the last version to avoid any breaking changes.


## Build

1. Clone this repository.

```
 git clone https://github.com/mahmoud-realdolman/Myschematics
    ```

   You could also start with an empty project but this repo contains everything you need to get started quickly: theming, configured routing, and a menu.


Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

For more information about how ng update schematics works : https://timdeschryver.dev/blog/ng-update-the-setup
https://github.com/angular/angular-cli/tree/main/packages/schematics/angular