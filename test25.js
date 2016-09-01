let promise=new Promise(function(resolve,reject){
	setTimeout(function(){
		resolve('qwerty');
	},300);
});


let promise1=new Promise(function(resolve,reject){
	setTimeout(function(){
		resolve('asdfgh');
	},500);
});

let promise2=Promise.resolve('test');


Promise.all([promise,promise1,promise2]).then(function([result1,result2,result3]){
	//console.log(result1+':'+result2);
	return result1+':'+result2+','+result3;
}).then(function(data){
	console.log(data);
});





