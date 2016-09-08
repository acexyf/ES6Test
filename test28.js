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
}, {
	id: 3,
	txt: 'gfg'
},{
	id: 2,
	txt: 'yur'
}, {
	id: 1,
	txt: 'vbn'
}];


let arr=[];
temp.map(x=>{
	if(x.id==2)
		arr.push(x);
})

console.log(arr);