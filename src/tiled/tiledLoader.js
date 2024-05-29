//imports
import * as fs from 'fs';
const regexps = {
    json : /\.json$/i,
    world: /\.world$/i,
    map: [/\.$/],
}
const extensions = {
    project: {regex: /\.tiled-project$/i, str: ".tiled-project"}
}
/**
 * @class TiledLoader Loads Tiled Project Assets
 *
 *
 */
class TiledLoader{
    /** project filepath */
    projectPath = "";
    project = {}
    constructor() {
        this.projectPath = "";
        this.project();
    }

    /**
     * use this when you need to reload something
     * @public
     * @param a
     */
    reload(a){

    }

    /**
     * set project
     * @param filepath
     */
    setProjectFile(filepath){

    }

    getProjectProperties(){

    }
    loadTileSet(data){

    }

    /**
     *
     * @param name
     * @param options - options for loadingMap
     */
    loadMap(name, options)
    {
        let {format}= options;
    }
}
export default TiledLoader