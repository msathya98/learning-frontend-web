(function(){
	var divFoo = document.getElementById("foo");
	style=divFoo.style;

	/* style.color="black";
	style.border="2px solid black";
	style.backgroundColor="blue";
	style.padding="2px";*/

	divFoo.className =" css-class  css-class2 ";
	/*divFoo.className= divFoo.className.replace("css-class2", " ")*/

	divFoo.classList.add("class-class");
	divFoo.classList.add("css-class2");

	divFoo.className="css-class css-class2";
	divFoo.classList.remove("css-class");

	divFoo.classList.toggle("css-class");
	divFoo.classList.toggle("css-class");
	divFoo.classList.toggle("css-class");


	/* var color=window.getComputedStyle(divFoo, null).getPropertyValue("color");

	var getStyle= function(el, cssProperty){
		if(typeOf getComputedStyle! == "underfined")
		{
			return window.getComputedStyle(el, null).getPropertyValue(cssProperty);

		}
		else{
			return el.currentStyle[cssProperty];

		}; */

	var color=getStyle(divFoo, "color");
	alert(color);


}());

