var watcher = chokidar.watch('dir', {
  ignored: /[\/\\]\./,
  persistent: true
});

// Something to use when events are received.
var log = console.log.bind(console);

// Add event listeners.
watcher
  .on('add', function(path) {
    log('File', path, 'has been added');
  })
  .on('change', function(path) {
    log('File', path, 'has been changed');
  })
  .on('unlink', function(path) {
    log('File', path, 'has been removed');
  });