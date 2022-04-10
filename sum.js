let x = function(a,b ){
 return  a +b ;
};

let y = function(a,b ){
	console.log("inside y");
 	return  a +b ;
};

let z = function(cback){

	console.log("statement 1")
	console.log("statement 2")
	console.log("statement 3")
	setTimeout(function(){
		console.log("statement 4");
		cback("end");
	},100);
	
};


module.exports.x = x;
module.exports.y = y;
module.exports.z = z;
