
let name='Bob',time='today';
let a=`hi my name is ${name},how are you ${time}`

let x = 1;
let y = 2;

let str = '(name) => `Hello ${name}!`';
let func = eval.call(null, str);
console.log(func('Jack')) // "Hello Jack!"