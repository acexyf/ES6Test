var fs = require('fs')
  , co = require('co')
  , thunkify = require('thunkify');
var readFile = thunkify(fs.readFile);

co(function* () {
  var test1 = yield readFile('test1.txt');
  var test2 = yield readFile('test2.txt');
  var test = test1.toString() + test2.toString();
  return test;
}).then(function (value) {
  console.log(value);
}, function (err) {
  console.error(err.stack);
});









