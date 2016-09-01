
// var temp=[1, 2, 3, 4, 5].copyWithin(0,3,5);
// console.log(temp);



var x = 1;
function foo( y = function() { x = 2; }) {
  x = 3;
  y();
  console.log('foo:'+x);
}

foo() // 3

