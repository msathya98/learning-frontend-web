alert("Comparision of two numbers");
var x=5, y=6;
if(x<y){
	alert("x is less than y");
}
else if(x==y){
	alert("x is equal to y");
}
else{
	alert("x is greater than y");
}


if(x==5 && y==6){
	alert("true");

}
else{
	alert("false");
}

if(x==5 || y==6){
	alert("true");

}
else{
	alert("false");
}


if(0){
	alert("hi");
}    // 0 is falsey value so thers is no output.

if (3) {
	alert("hi");  // expect 0 all others numbers are truthy values.
}

if(""){
	alert("hi"); // empty string is falsey.
}

if(null){
	alert("hi"); // null is falsey value.

}

if({} && []){
	alert("hi"); // these are truthy values.
}
