'use strict';
// this is file is available to the rest of the system
// through the puzzle `@colabo-utils/config`
// please read `@colabo-utils/config/README.md` for more details
// NOTE: it is important that this file is not imported, but required
// and that it is therefore JS (not TS, although it can be, if we still do not import it)
// because otherwise it would be bundled in a final file during building
// and we wouldn't be able to change the config after building project
console.log("[config/global.js] Setting up the globalSet variable");
let globalSet = {};
if (typeof window !== 'undefined' && typeof window !== 'null') {
    if (!window.hasOwnProperty('globalSet'))
        window.globalSet = {};
    globalSet = window.globalSet;
}
if (typeof global !== 'undefined' && typeof global !== 'null') {
    if (!global.hasOwnProperty('globalSet'))
        global.globalSet = {};
    globalSet = global.globalSet;
}
console.log("Setting up the global variable");
if (!globalSet.hasOwnProperty('general')) {
    console.log("[config/global.js] Setting up globalSet.general");
    globalSet.general = {};
}
var path = require('path');
// expose this function to our app using module.exports
if (!globalSet.hasOwnProperty('paths')) {
    console.log("Setting up globalSet.paths");
    globalSet.paths = {};
    globalSet.paths.DATASET_FOLDER = path.resolve(globalSet.paths.EXPERIMENTS_FOLDER + "/data");
    globalSet.paths.FOLDER_OUT = path.resolve(globalSet.paths.DATASET_FOLDER + "/out");
    globalSet.paths.FOLDER_CACHE = path.resolve(globalSet.paths.EXPERIMENTS_FOLDER + "/cache");
}
if (!globalSet.hasOwnProperty('dbConfig')) {
    console.log("Setting up globalSet.dbConfig");
    globalSet.dbConfig = {
        newConnect: true,
        dbName: "KnAllEdge",
        domain: '127.0.0.1',
        port: 27017,
        user: 'user',
        pass: 'pass'
    };
}
if (!globalSet.hasOwnProperty('puzzles')) {
    console.log("Setting up globalSet.puzzles");
    globalSet.puzzles = {
        '@colabo-flow/b-topiChat': {
            saveFlowInteractionToMap: false,
            mapId: null
        },
        '@colabo-flow/b-services': {
            debug: true,
            url: 'amqp://localhost:5672',
            queue: 'colabo-service-localhost',
            shouldRequestResult: true,
            noAck: true,
            shouldListenOnSeparateResponseQueue: false,
            separateResponseQueue: 'colabo-service-response-localhost'
        },
        '@audio-commons/mediator-access': {
            client_id: 'kWisHB1KxJFWuT92ayozRhGe1WC3UKbLtIQo0vnK',
            username: 'mprinc',
            password: 'kanalizacija'
        }
    };
}
console.log("[config/global.js] globalSet.puzzles:", globalSet.puzzles);
// node support (export)
if (typeof module !== 'undefined') {
    // workarround for TypeScript's `module.exports` readonly
    if ('exports' in module) {
        if (typeof module['exports'] !== 'undefined') {
            module['exports'].globalSet = globalSet;
        }
    }
    else {
        module['exports'] = globalSet;
    }
}
console.log("[config/global.js] finished");
//# sourceMappingURL=global.js.map