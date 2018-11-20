$(document).ready(function(){
	setTimeout(function(){
		$("#front").fadeIn(4000);
	},0);
	setTimeout(function(){
		$("#middle").fadeIn(4000);
	},3000);
	setTimeout(function(){
		$("#rear").fadeIn(4000);
	},6000);
});

$("#icon-coffee").bind("mouseover",function(e){
	$(this).attr("src","icon-coffee_.png");
});
$("#icon-coffee").bind("mouseout",function(e){
	$(this).attr("src","icon-coffee.png");
});
$("#icon-coffee_shop").bind("mouseover",function(e){
	$(this).attr("src","icon-coffee_shop_.png");
});
$("#icon-coffee_shop").bind("mouseout",function(e){
	$(this).attr("src","icon-coffee_shop.png");
});
$("#icon-person").bind("mouseover",function(e){
	$(this).attr("src","icon-person_.png");
});
$("#icon-person").bind("mouseout",function(e){
	$(this).attr("src","icon-person.png");
});

jQuery(function($){
	$("body").css("display", "none");
	$("body").fadeIn(1000);
	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(1000, redirectPage);
});
function redirectPage(){
	window.location = linkLocation;
	}
});

var posX=0;
var posY=0;

function getMousePosition(e){
	var t=window.event? window.event:e;
	posX=t.clientX;
	posY=t.clientY + $(window).scrollTop();
}
function moveImg(){
	var mx=parseInt(document.getElementById('trace').style.left.replace('px', ''));
	var my=parseInt(document.getElementById('trace').style.top.replace('px', ''));

	document.getElementById('trace').style.left = Math.round(mx + ((posX - mx) / 5)) + 'px';
	document.getElementById('trace').style.top = Math.round(my + ((posY - my) / 5)) + 'px';
}
document.onmousemove=getMousePosition;
setInterval("moveImg()",30);