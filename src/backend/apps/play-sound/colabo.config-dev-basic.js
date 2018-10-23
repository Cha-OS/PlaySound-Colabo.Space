var puzzles = {
    name: "b-play-sound",
    description: "This is a frontend aspect of the PlaySound system",
    sudo: {
        "offer": false,
        "install": false,
        "build": false,
        "symlinks": false
    },
    dependencies: {
        "@colabo-rima/b-aaa": {},
        "@colabo-topichat/b-core": {},
        "@colabo-topichat/b-talk": {},
        "@colabo-utils/i-config": {},
        "@audio-commons/mediator-access": {},
        "@audio-commons/mediator-express": {}
    },
    offers: {}
}

exports.puzzles = puzzles;