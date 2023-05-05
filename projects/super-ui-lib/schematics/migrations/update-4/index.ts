import { Rule, SchematicContext, Tree, SchematicsException } from '@angular-devkit/schematics';
export default function (): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const pkgPath = '/package.json';
    const buffer = tree.read(pkgPath);
    if (buffer === null) {
      throw new SchematicsException('Could not read package.json');
    }
    const content = buffer.toString();
    const pkg = JSON.parse(content);
    if (pkg === null || typeof pkg !== 'object' || Array.isArray(pkg)) {
      throw new SchematicsException('Error reading package.json');
    }
    const dependencyCategories = ['dependencies', 'devDependencies'];
    dependencyCategories.forEach((category) => {
      if (pkg[category] && pkg[category]['super-ui-lib']) {
        delete pkg[category]['super-ui-lib'];
      }
    });
    context.logger.info("we updating the library....")
    tree.overwrite(pkgPath, JSON.stringify(pkg, null, 3));
    return tree;
  };
}