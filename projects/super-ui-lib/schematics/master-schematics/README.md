# Master-schematics

Generating table with the Angular CLI and Schematics.
<div>
<p><img src="https://imgur.com/KTCaS7e.png" alt="Scaffold files for table" width="800"></p>
<p><img src="https://imgur.com/HsimeRq.png" alt="Scaffold files for table" width="800"></p>

</div>



## Tutorial: Getting Started

 1. First install rensol-library to your application `ng add rensol-library` or `npm i rensol-library`  and after that
 you have to import module to your app module : import { SuperUiLibModule } from 'rensol-library';

Run `ng g rensol-library:master-schemtics` to generate a new form  in your application .
2. Switch to the folder `src/app/components` and create a sub-folder `view` or `table` or choose the name that you will give with a file `model.json`. Put the following content into this file you can choose what should be the name of the  form items:


 ```json
    {
 "title": "title van de view",
"primaryBtn":"primary btn naam",
"nietPrimaryBtn": "niet primary btn naam"


}

```
If you want to generate table then you have to place this in your model.json
```json
    {
  "tablename": "Offerts table",
  "buttonNaam":"Offerts",
  "columns":[
      {
          "colum1": "NO",
          "colum2": "Name",
          "colum3":"Weight",
          "colum4":"Symbol"
      }
  ]


}

```
The generator is using a json5 parser. This means that you can use comments, omit quotation marks, and use trailing commas. 

3. In your project's root directory, run the following Angular CLI based command:

    ```
    ng g rensol-library:rensol-master-schemtics <naam van de folder in src/app/components>
    ```
    after run the ng g commando then you get this:
    <p><img src="https://imgur.com/92CxKsh.png" alt="Scaffold files for table" width="800"></p> 
    next you have to choose the component that you want to install.

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

More information about this schematics works : https://github.com/angular/angular-cli/tree/main/packages/schematics/angular

https://www.npmjs.com/package/angular-crud
