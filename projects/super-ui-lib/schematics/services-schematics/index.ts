import { Rule,url,mergeWith,apply, applyTemplates,move, chain } from '@angular-devkit/schematics';
import { SuperUIComponentSchema } from './super-ui-component';
import {strings,normalize} from '@angular-devkit/core'

export function ServiceSchematics(options:SuperUIComponentSchema):Rule{
    return()=>{
        const templateSource = apply(
            url('./files'),[
applyTemplates({
    classify: strings.classify,
    dasherize: strings.dasherize,
    camelize : strings.camelize,
    
    name : options.name
}),
move(normalize(`/${options.path}/${strings.dasherize(options.name)}`))
            ]
        )
    return chain([
mergeWith(templateSource)],


 )
 

}
}