//creating an array
var foo = [10, "hello", true];
var value = foo[0];
foo[0] = 12;
foo[3] = 15;
foo[5] = "sathya";
alert(foo);

var names = ["Sathya" , "Mahesh"];
var names2 = ["Pramod" , "Kushal"];

var people= names.concat(names2);
alert(people);

var joined = people.join("");
alert(joined);

var joined = people.join(", ");
alert(joined);

var reversed = people.reverse();
alert(reversed);

var sorted = people.sort();
alert(sorted);

