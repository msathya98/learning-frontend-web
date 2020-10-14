
var obj= "This is the string object";
length= obj.length;
alert(length);
var index = obj.indexOf("is");
alert(index);
var index2 = obj.indexOf("is", index+1);
alert(index2);
var index = obj.lastIndexOf("is");
alert(index);
var substr = obj.substr(13,6);
var newString = obj.replace("object","value");
alert(newString);

var upperCase = obj.toUpperCase();
alert(upperCase);

var lowerCase = obj.toLowerCase();
alert(lowerCase);


var num = 8;
str = num.toString();
alert(str);

var person = new Object();
person.firstName = "Sathya";
person.lastName = "Achar";
person.getFullName = function(){
	return person.firstName + " " + person.lastName;

};
	alert(person.getFullName());
