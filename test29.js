function* generate(){
	yield 'asd';
	yield 'qwe';
	yield 'zxc';
	yield 'kglh';
	yield 123+32
	return 'lkuio';
	yield 'kglh';
}


var ge=generate();

// var flag=true;
// while(flag){
// 	let temp=ge.next();
// 	if(temp.done && !temp.value){
// 		flag=false;
// 	}
// 	else{
// 		console.log(temp);
// 	}
// }


for(let elem of ge){
	console.log(elem);
}
