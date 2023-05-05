
import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import { execSync } from "child_process";


export function lintSchematic(): Rule {
    return (_tree: Tree, _context: SchematicContext) => {
      _context.logger.info("Creating your component....");
      execSync(`for i in comp1 comp2; do ng g c i; done` );
    };
  }