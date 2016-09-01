var promise=new Promise(function(resolve,reject){
	console.log('new');
	resolve();
});


promise.then(function(value){
	console.log('resolve');
},function(err){

});


console.log('outer');















