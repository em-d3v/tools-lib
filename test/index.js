
import * as child_process from "child_process";
import chalk from "chalk";
function RunTests(){
    let dir = `${process.cwd()}/test/tiled.test.js`;
    const child = child_process.execFile('node', ['--trace-uncaught',dir],
        function (error, stdout, stderr){
            if (error)
                console.log(chalk.red('Error:'),chalk.red(error), chalk.red(error));
        });
    try{

    }   catch (err){
        console.log(chalk.red('Error:'),chalk.red(err));
    }
}

RunTests();