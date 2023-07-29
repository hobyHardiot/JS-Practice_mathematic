//Manipulation de visibilité

document.getElementById("moncalque1").style.visibility="hidden";
document.getElementById("moncalque2").style.visibility="hidden";
document.getElementById("moncalque3").style.visibility="hidden";
document.getElementById("moncalque4").style.visibility="hidden";





function affichCalque() {
	document.getElementById("moncalque1").style.visibility="visible";
	document.getElementById("moncalque2").style.visibility="visible";
	document.getElementById("moncalque3").style.visibility="visible";
	document.getElementById("moncalque4").style.visibility="visible";
}


//affiche calq suivant ou precendent
var a = 0;

function plus(n) {
	myFunction(a += n);
}

function myFunction(n) {
	var x = document.querySelectorAll(".calque");
	// x[n].style.backgroundColor = "blue";
	$(x[n]).css({'backgroundColor':'blue'}).animate({
		opacity:'1'
	}).css({'zIndex':'0'}).animate({
		opacity:'0'
	});;
	$(x[n-1]).css({'backgroundColor':'none'}).animate({
		opacity:'0'
	}).css({'zIndex':'1'}).animate({
		opacity:'1'
	});
	// $(x[n+1]).css({'backgroundColor':'none'}).animate({
	// 	opacity:'0'
	// });
	// x[n-1].style.background = "none";
	// x[n+1].style.background = "none";




}






// function next() {
// 	document.getElementById("moncalque1").style.visibility="hidden";
// }






















