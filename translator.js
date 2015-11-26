var PythonShell = require('python-shell');
var options = {
  mode: 'json',
  scriptPath: './python'
};



var pyshell = new PythonShell('test.py', options);

var output = '';

pyshell.stdout.on('data', function (data) {
  output = data;
});

pyshell
  .send({ a: 'b' })
  .send(null)
  .send([1, 2, 3])
  .end(function (err) {
    if (err) return console.log(err);
    console.log(output);
  });


//PythonShell.run('create_oath.py', null, (err, results)=>{
//
//});
//
//
//PythonShell.run('upload.py', null, (err, results)=>{
//
//});





//
//pyshell.end(function (err) {
//  if (err) throw err;
//  console.log('finished');
//});