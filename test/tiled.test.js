import {ProjectUtils} from '../src/tiled/index.js';
import chalk from "chalk";
const example = 'examples/tiledProject';

const dir = `${process.cwd()}/`

let p = ProjectUtils.loadProjectFile(`./src/${example}/Example.tiled-project`);
console.log(chalk.green('LoadProjectFile Success'));
