let temp = [{
	id: 0,
	txt: 'qwe'
}, {
	id: 1,
	txt: 'asd'
}, {
	id: 2,
	txt: 'zxc'
}, {
	id: 3,
	txt: 'fgh'
}, ];

var arr = temp.filter(x => (x.id==0));
console.log(arr);