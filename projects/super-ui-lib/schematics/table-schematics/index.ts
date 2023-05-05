import {
  Rule, Tree, SchematicsException,
  apply, url, applyTemplates, move,
  chain, mergeWith
} from '@angular-devkit/schematics';
import * as JSON5 from 'json5';
import { FileModel } from './model';
import { getWorkspace } from '@schematics/angular/utility/workspace';
import { capitalize } from '@angular-devkit/core/src/utils/strings';


import { strings} from '@angular-devkit/core';

import { Schema as MyServiceSchema } from './schema';
import { addModuleImportToModule } from '@angular/cdk/schematics';




export function tableGenerator(options: MyServiceSchema): Rule {
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

    const modelJson = modelBuffer.toString('utf-8');
    const model = JSON5.parse(modelJson) as FileModel;
    
    addModuleImportToModule(host,
      `${appPath}/app.module.ts`,
      `${capitalize(options.name)}Module`,
      `./${options.name}/${options.name}.module`);

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