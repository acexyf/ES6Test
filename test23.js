var s = new Set();

[2, 3, 5, 4, 5, 2, 2].map(x => s.add(x));



let arr=Array.from(s);
console.log(dedupe(s));

function dedupe(array) {
  return Array.from(new Set(array));
}

