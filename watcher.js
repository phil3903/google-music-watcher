var pyshell = require('./pycommands');
var chokidar = require('chokidar');

const WATCH_DIR = './watch_dir';

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