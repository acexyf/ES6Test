var arrayLike = {
    '0': 3,
    '1': 6,
    '2': 9,
    length: 3
};
let arr2 = Array.from(arrayLike,x => x*x);
console.log(arr2);
