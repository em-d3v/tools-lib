import fs from "fs";

/**
 * @class TiledPlugin
 * @classdesc Utility type plugin for Tiled generated files
 */
class TiledPlugin {

    constructor() {
    }

    /**
     * parses project files into json string
     * @param filepath - path/to/project.tiled-project
     *
     * @return {{}} - Returns Project Data
     * @example parseProject()
     */
    parseProject(filepath){
        const regex = /\.tiled-project$/i;
        let match = false, content, data;
        let project = {};
        if (!fs.existsSync(filepath)) {
            throw `Project File ${filepath} does not exist.`;
        } else {
            //TODO: parse project file
            //check project extension
            match = regex.test(filepath);
            if (match === true) {
                //check file dir - if it begins with a protocol, then use jquery. else use fs
                //parse file
                content =  fs.readFileSync(filepath,{encoding: "utf-8"});
                project = JSON.parse(content);
                console.log(project);
            } else {
                throw "tile project must contain extension .tiled-project";
            }
        }
        return project;
    }

    /**
     * parses TiledMap
     * @param filepath path/to/file(.json|.tmx|.xml)
     * @param options
     */
    parseMap(filepath,options){
       const regex = /\.(json|tmx|xml)$/i;
       let file;
       let map ={};
       if (regex.test(filepath)){

       }
    }
    parseWorld(){

    }

}
export default TiledPlugin;