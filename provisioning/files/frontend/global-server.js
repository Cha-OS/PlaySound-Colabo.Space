'use strict';

// this is file is imported and exported 
// to the rest of the system through the puzzle
// `@colabo-utils/i-config`

// the initializing part of the application
// like the apps/<app_name>/index.ts in the backend
// or apps/<app_name>/src/main.ts
// should (somehow) load it and pass it to 
// the init method of the puzzle `@colabo-utils/i-config`

console.log("[config/global.js] Setting up the globalSet variable");

let globalSet = {};
if (typeof window !== 'undefined' && typeof window !== 'null') {
    if (!window.hasOwnProperty('globalSet')) window.globalSet = {};
    globalSet = window.globalSet;
}
if (typeof global !== 'undefined' && typeof global !== 'null') {
    if (!global.hasOwnProperty('globalSet')) global.globalSet = {};
    globalSet = global.globalSet;
}

// let globalSet = (typeof global !== 'undefined' && global['knalledge']) || (typeof window !== 'undefined' && window['knalledge']);

console.log("[config/global.js] Populating the globalSet variable");

if (!globalSet.hasOwnProperty('general')) {
    console.log("[config/global.js] Setting up globalSet.general");
    globalSet.general = {
        // RESTfull backend API url
        serverUrl: 'http://playsound.colabo.space/api'
    };
}

if (!globalSet.hasOwnProperty('puzzles')) {
    console.log("[config/global.js] Setting up globalSet.puzzles");
    globalSet.puzzles = {
        '@colabo-topichat/core': {
            socketUrl: 'http://playsound.colabo.space/api'
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
    } else {
        module['exports'] = globalSet;
    }
}

console.log("[config/global.js] finished");