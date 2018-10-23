var variables = {
    ANGULAR_PACKAGES_FOLDER: './',
    ANGULAR_BUILD_PACKAGES_FOLDER: './'
};

var puzzles = {
    name: "f-play-sound",
    description: "This is a frontend aspect of the PlaySound system",
    sudo: {
        "offer": false,
        "install": false,
        "build": false,
        "symlinks": false
    },
    dependencies: {
        "@colabo-puzzles/f-core": {},
        "@colabo-rima/f-aaa": {},
        "@colabo-utils/i-pub-sub": {},
        "@colabo-topichat/f-core": {},
        "@colabo-topichat/f-talk": {},
        "@colabo-utils/i-config": {},
        "@colabo-rima/f-core": {},
        "@colabo-knalledge/f-core": {},
        "@colabo-knalledge/f-store_core": {}
    },
    offers: {}
};

var symlinks = [];

exports.variables = variables;
exports.puzzles = puzzles;
exports.symlinks = symlinks;