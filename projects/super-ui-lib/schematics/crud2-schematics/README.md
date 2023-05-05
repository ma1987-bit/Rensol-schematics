# Crud2-schematics

Generating CRUD applications with the Angular CLI and Schematics.
<div>
<p><img src="https://imgur.com/Sp1jn7N.png" alt="Scaffold files for CRUD" width="800"></p>
<p><img src="https://imgur.com/x4tjImV.png" alt="Scaffold List" width="800"></p>
<p><img src="https://imgur.com/JFBADOX.png" alt="Scaffold List" width="800"></p>
</div>


## Tutorial: Getting Started

 1. First install super-ui-lib to you application `ng add super-ui-lib` and after that
Run `ng g super-ui-lib:crud2-schematics` to generate crud opertion in your application .
2. Switch to the folder `src/app` and create a sub-folder `flight` with a file `model.json`. Put the following content into this file you can choose what should be the name of the  hotel and the rest of data comes from the api:

 ```json
    {
    "title": "Flight",
    "entity": "flight",
    "apiEindpoint":"flight",
    "filter": [
      "from",
      "to"
    ],
    "fields": [
      {
        "name": "id",
        "isId": true,
        "type": "number",
        "label": "Id",
        "default": 0,
        "control": "text"
      },
      {
        "name": "from",
        "type": "string",
        "label": "From"
      },
      {
        "name": "to",
        "type": "string",
        "label": "To"
      },
      {
        "name": "date",
        "type": "date",
        "control": "date",
        "label": "Date"
      }
    ]
}
```
The generator is using a json5 parser. This means that you can use comments, omit quotation marks, and use trailing commas. 

3. In your project's root directory, run the following Angular CLI based command:

    ```
    ng g super-ui-lib:crud2-schematics flight.
    ```

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

For more information about this schematics works : https://www.npmjs.com/package/angular-crud
https://github.com/angular/angular-cli/tree/main/packages/schematics/angular