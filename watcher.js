var pyshell = require('./pycommands');
var chokidar = require('chokidar');
var argv = require('minimist')(process.argv.slice(2));

var WATCH_DIR = argv.d || 'watch_dir';

console.log(WATCH_DIR);

var watcher = chokidar.watch(WATCH_DIR, {
  ignored: /[\/\\]\./,
  persistent: true
});

// Something to use when events are received.
var log = console.log.bind(console);

// Add event listeners.
watcher
  .on('add', function(path) {
    log('File', path, 'has been added');
    pyshell.upload(path);
  });