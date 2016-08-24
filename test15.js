var a = 5;
var b = 10;

function passthru(literals, ...values) {
  var output = "";
  for (var index = 0; index < values.length; index++) {
    output += literals[index] + values[index];
  }

  output += literals[index];
  console.log(output);
  return output;
}

passthru`Hello ${ a + b } world ${ a * b} next ${ a - b }`;