var x = 1;
function foo( y = function() { x = 2; }) {
  x = 3;
  y();
  console.log('foo:'+x);
}

foo() // 3