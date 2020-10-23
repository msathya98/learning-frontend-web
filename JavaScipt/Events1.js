(function(){
	window.onload=function(){
		var el=document.getElementById("Box");
		el.onclick= function(){
			this.style.backgroundColor="red";

		};
};
/*var buttons= document.getElementByTagName("button");
for(var i=0; len=buttons.length; i<len; i=i+1){
	buttons[i].onclick=function(){
		var className = this.innerHTML.toLowerCase();
		document.body.className = className
	};
};*/
}());