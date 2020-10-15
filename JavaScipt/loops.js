///for loop:
var names = ["Sathya","Mahesh","Pramod","kushal" ];
for(var i=0; i<names.length; i=i+1){
	name = names[i];
	alert(name);
}


var names = ["Sathya","Mahesh","Pramod","kushal" ];
while(names.length>0){
	var element = names.pop();
	alert(element);
}
alert("This is out of the loop");

var numbers = [2, 5, 8, 1, 6, 3, 5];
do{
alert("this is first number");
}
while(numbers.length<1);
alert("this is not first number");
