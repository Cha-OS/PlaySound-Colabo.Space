"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MODULE_NAME = "backend-play-sound";
process.chdir(__dirname);
let configFile = require('./config/global');
let globalSet = configFile.globalSet;
console.log("[%s:index] globalSet.paths: %s", MODULE_NAME, JSON.stringify(globalSet.paths));
let config = require('@colabo-utils/config');
config.init(globalSet);
let express = require('express');
let resource = require('express-resource');
let fs = require('fs');
let http = require('http');
let https = require('https');
// let db = require('./models');
function supportCrossOriginScript(req, res, next) {
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT, HEAD");
    res.header("Allow", "POST, GET, OPTIONS, DELETE, PUT, HEAD");
    var origin = req.headers.origin;
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
    //console.log("[supportCrossOriginScript] setting up headers");
    res.status(200);
    next();
}
var portHttp = process.argv[2] || process.env.PORT || 8888;
var app = express();
// var bodyParser = require('body-parser');
app.configure(function() {
    app.use(express.logger());
    app.use(express.cookieParser()); // cookie parser is used before the session
    // multer and body-parser resolution
    // https://github.com/expressjs/multer/issues/251
    // app.use(express.bodyParser());
    // app.use(bodyParser.json());
    app.use(express.json());
    app.use(express.urlencoded());
    console.log("process.argv: %s", JSON.stringify(process.argv));
    app.set('port', portHttp);
    app.use(supportCrossOriginScript);
    app.use(app.router);
});
/* Knalledge Maps */
/* RIMA */
/* RIMA-AAA */
var aaa = app.resource('aaa', require('@colabo-rima/b-aaa/aaa'), { id: 'type?/:searchParam?/:searchParam2?' });
// TopiChat
const b_core_1 = require("@colabo-topiChat/b-core");
var topiChat = new b_core_1.TopiChat('Colabo.Space');
// let acMediator = require('@audio-commons/mediator-express')(app);
const AcMediator = require("@audio-commons/mediator-express");
AcMediator.initialize(app);
let server = http.createServer(app).listen(app.get('port'), function() {
    console.log("Listening on " + app.get('port'));
});
topiChat.connect(server);
//# sourceMappingURL=index.js.map