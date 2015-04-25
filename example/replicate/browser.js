var level = require('level-browserify');
var forkdb = require('forkdb');

var db = level('whatever');
var fdb = forkdb(db);

window.db = db;
window.fdb = fdb;
window.wsock = require('websocket-stream');
