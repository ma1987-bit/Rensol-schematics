import {
  Rule, Tree, SchematicsException,
  apply, url, applyTemplates, move,
  chain, mergeWith
} from '@angular-devkit/schematics';
import * as JSON5 from 'json5';
import { FileModel } from './model';
import { getWorkspace } from '@schematics/angular/utility/workspace';
// import { capitalize } from '@angular-devkit/core/src/utils/strings';
import {classify }from '@angular-devkit/core/src/utils/strings';


import { strings} from '@angular-devkit/core';

import { Schema as MyServiceSchema } from './schema';
// import { addModuleImportToModule } from '@angular/cdk/schematics';
import { addDeclarationToModule } from '@schematics/angular/utility/ast-utils';
import { InsertChange } from '@schematics/angular/utility/change';
import * as ts from 'typescript';




export function rensol_table(options: MyServiceSchema): Rule {
  return async (host: Tree) => {
    const workspace = await getWorkspace(host);
    if (!options.project) {
      options.project = workspace.projects.keys().next().value;
    }
    const project = workspace.projects.get(options.project);
    const appPath = `${project?.sourceRoot}/app`;

    const modelFile = `${appPath}/${options.name}/${options.model}`;

    const modelBuffer = host.read(modelFile);


    if (modelBuffer === null) {
      throw new SchematicsException(`Model file ${options.name} does not exist.`);
    }
    const modulePath = `${appPath}/app.module.ts`;
    // const recorder = host.beginUpdate(modulePath);
    const text:any = host.read(modulePath);
    // const moduleContent:any = text;
    // host.create(modulePath, moduleContent);

    const source = ts.createSourceFile(
      modulePath,
      text?.toString(),
      ts.ScriptTarget.Latest,
      true
    );
    const updateRecorder = host.beginUpdate(modulePath);
    const changes = addDeclarationToModule(
      source,
      modulePath,
      `${classify(options.name.replace(/-/g,""))}`,
      `./${options.name}/${options.name}.component`
    ) as InsertChange[];

    for (const change of changes) {
      if (change instanceof InsertChange) {
        updateRecorder.insertLeft(change.pos, change.toAdd);
      }
    }
    host.commitUpdate(updateRecorder);
    // console.log(host.get(modulePath)?.content.toString())

    const modelJson = modelBuffer.toString('utf-8');
    const model = JSON5.parse(modelJson) as FileModel;
// instead import to module import to declarations
    // addModuleImportToModule(host,
    //   `${appPath}/app.module.ts`,
    //   `${capitalize(options.name)}Module`,
    //   `./${options.name}/${options.name}.module`);

    const templateSource = apply(url('./files'), [
      applyTemplates({
        classify: strings.classify,
        dasherize: strings.dasherize,
        name: options.name,
        model
      }),
      move(`${appPath}/${options.name}`)
    ]);

    return chain([
      mergeWith(templateSource)
    ]);
  };
}
