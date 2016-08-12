let s='我是一个测试的字符𠮷';
console.log(s);
for(var i=0;i<s.length;i++){
	//console.log(s[i]);
}
for(let i of s){
	console.log(i);
}