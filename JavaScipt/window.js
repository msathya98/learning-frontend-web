

var foo= "hello, window";
var bar = function(){
	var foo = "hello, function";
	alert(window.foo);

};
bar();


(function(){
	var foo= "hello, window";
var bar = function(){
	var foo = "hello, function";
	alert(window.foo);

};
bar();

}()); 

(function() { 
	if(confirm("Do you want to open google.com ?")){
		location = "http://www.google.com";

} else {
		alert("You'll stay here only");

}

}());



