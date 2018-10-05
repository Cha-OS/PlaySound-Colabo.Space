var variables = {
    ANGULAR_PACKAGES_FOLDER: './',
    ANGULAR_BUILD_PACKAGES_FOLDER: './'
};

var puzzles = {
    name: "f-play-sound",
    description: "This is a frontend aspect of the PlaySound system",
    dependencies: {
        "@colabo-puzzles/puzzles_core": {},
        "@colabo-rima/rima_aaa": {},
        "@colabo-utils/pub-sub": {},
        "@colabo-topiChat/core": {},
        "@colabo-topiChat/talk": {},
        "@colabo-utils/config": {},
        "@colabo-rima/rima_core": {},
        "@colabo-knalledge/knalledge_core": {},
        "@colabo-knalledge/knalledge_store_core": {}
    },
    offers: {}
};

var symlinks = [];

exports.variables = variables;
exports.puzzles = puzzles;
exports.symlinks = symlinks;