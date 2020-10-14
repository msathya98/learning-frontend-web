var foo = do_something(3);
alert("For  X=3, it give (X+3)*2 is ");
function do_something(simple){
	simple= simple+3;
	simple= simple*2;
	return simple;
}
alert(foo);

var globalVar = "This is global variable";
var globalFun= function(){
	
		var localVar= "This is local variable";
		
		var localFun= function(){
			var superLocalVar= "hello guys";
			alert(superLocalVar);
			alert(localVar);
			alert(globalVar);
			localVar= " local variable valve is modified";
 

		}
	localFun();
	alert(localVar);
	globalVar= "global variable valve is modified";
	
	
};
globalFun();
alert(globalVar);

