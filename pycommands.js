var PythonShell = require('python-shell');
PythonShell.defaultOptions = {
  mode: 'json',
  scriptPath: './python'
};

var COMMANDS = {
  TEST: 'test.py',
  UPLOAD: 'upload.py',
  OAUTH: 'create_oauth.py'
};

exports.test = function(filePaths) {
  var pyshell = new PythonShell(COMMANDS.TEST);

  var output = '';

  pyshell.stdout.on('data', function (data) {
    output = data;
  });

  pyshell
    .send(filePaths)
    .end(function (err){
      if (err) return console.log(err);
      console.log(output);
    });
};

exports.upload = function(filePaths){
  var pyshell = new PythonShell(COMMANDS.UPLOAD);

  var output = '';

  pyshell.stdout.on('data', function(data){
    output = data;
  });

  pyshell.send(filePaths)
  .end(function(err){
    if(err) return console.log(err);
    console.log(output);
  })
};
