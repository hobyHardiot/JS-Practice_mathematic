$(document).ready(function (){
	$("#card1").click(function () {
		$("#card1").toggleClass("added",true).toggleClass("added1",true).css({'margin-top':'0'});
		$("#card2").toggleClass("animOfCard2",true,3000).hide(1000).css({'margin-top':'0'});
		$("#card3").toggleClass("animOfCard3",true,3000).hide(1000).css({'margin-top':'0'});
		// $(".back").toggleClass("test",true);
		$("#retour1").css({
			'display':'block'
		}).animate({
			opacity:'1',
			left:'0'
		});
	});
	$("#card2").click(function () {
		$("#card1").toggleClass("animOfCard1",true,3000).hide(1000);
		$("#card2").toggleClass("added",true).toggleClass("added2",true,2000);
		$("#card3").toggleClass("animOfCard3",true,3000).hide(1000);
		$("#retour2").css({
			'display':'block'
			}).animate({
			opacity:'1',
			left:'0'
		});
	});
	$("#card3").click(function(){
		$("#card3").toggleClass("added",true).animate({
			height:'0',
			width:'1000'
		},500);
		$("#card1").toggleClass("animOfCard1",true,3000).hide(1000);
		$("#card2").toggleClass("animOfCard2",true,3000).hide(500);
		$("#retour3").css({
			'display':'block'
		}).animate({
			opacity:'1',
			left:'0'
		});
		$("#panneauPub").animate({
			opacity:'1'
		},1500);
		$("#panneauPub").css({
			"display":'block'
		});

		// $("#moncalque1,#moncalque2,#moncalque3,#moncalque4").delay(200).animate({
			// left:'0px',
			// width:'300px',
			// height:'400px',
			// borderRadius:'15px'
		// },1500);
		$("#moncalque1").delay(200).animate({
			left:'0px',
			width:'350px',
			height:'400px',
			borderRadius:'15px'
		},1500);
		$("#moncalque2").delay(200).animate({
			left:'0px',
			width:'350px',
			height:'400px',
			borderRadius:'15px'
		},1500);
		$("#moncalque3").delay(200).animate({
			left:'0px',
			width:'350px',
			height:'400px',
			borderRadius:'15px'	
		},1500);
		$("#moncalque4").delay(200).animate({
			left:'0px',
			width:'350px',
			height:'400px',
			borderRadius:'15px'
		},1500);
	});


	$("#retour1").click(function () {
		$("#card1").toggleClass("added",false).toggleClass("added1",false,2000);
		$("#card1").toggleClass("animOfCard1",false,3000).show(500);
		$("#card2").toggleClass("animOfCard2",false,3000).show(500);
		$("#card3").toggleClass("animOfCard3",false,3000).show(1000);
		$("#retour1").animate({opacity:'1'}).css({
			'display':'none'
		 });
	});

	$("#retour2").click(function () {
			$("#card1").toggleClass("animOfCard1",false,1000).show(500);
			$("#card2").toggleClass("added",false).toggleClass("added2",false,2000);
			$("#card3").toggleClass("animOfCard3",false,3000).show(1000);		
			$("#retour2").animate({opacity:'1'}).css({
				'display':'none'
			});
		});

	$("#retour3").click(function () {
			$("#card1").toggleClass("animOfCard1",false,3000).show(1000);
			$("#card2").toggleClass("animOfCard2",false,3000).show(500);
			$("#card3").toggleClass("added",false,3000).show(500).toggleClass("added1",false,2000).animate({
				width:'300px',
				height:'400px'
			});
	
			$("#retour3").animate({opacity:'1'}).css({
				'display':'none'
			});
			$("#panneauPub").css({
				"display":'none'
			});
		});

	});


	


function script() {
	
	var eq=document.getElementById("scanf").value;
	
	var modifEq = eq.replace(/\+/g," ").replace(/\-/g," ").split(" ");
	var mizarazara = eq.split("x");



	if(mizarazara[0].match(/^\-/)){
		var tmp = modifEq.splice(0,1);
	}

	if(modifEq.length!=3){
		$(document).ready(function() {
			$("#alert").animate({
				opacity:'1'
			}).delay(1000).animate({
				opacity:'0'
			});
		});
	}
//*********************PREMIER TERME*********************
	
	var alert1;
	// (correct1)?alert1 ="[Correct]":alert1 ="[Incorrect]";
	// document.getElementById("mofifEqq").innerHTML = "Premier terme:  " + modifEq;

	if (modifEq[0].match(/(^\d+x|^x)(\²|\^2)$/)) {
		alert1 ="[Correct]";
	} else {
		alert = "[Incorrect]";
	}


	//*********************DEUXIEME TERME*******************
	var alert2;
	(modifEq[1].match(/x/))?(modifEq[1] == modifEq[1].match(/\d+x/))?alert2 ="[Correct]":alert2 ="[Incorrect]":(modifEq[1].match(/\d+/)==modifEq[1])?alert2 ="[Correct]":alert2 ="[Incorrect]";

	//*********************TROISIEME TERME*******************
	var alert3;
	(modifEq[2].match(/^\d+$/)==modifEq[2])?alert3 ="[Correct]":alert3 ="[Incorrect]";
	
	//*******************************************************//





	var mizarazaraSigne = eq.split("x");


	var premierTerme =  Number(modifEq[0].match(/\d+/));
	var deuxiemeTerme =  Number(modifEq[1].match(/\d+/));
	var troisiemeTerme =  Number(modifEq[2].match(/\d+/));
			
	if (mizarazaraSigne[0].match(/\-/)) premierTerme*=-1;
		var casPrtcl = "x²";
		if (modifEq[0]==casPrtcl){ 
			premierTerme = 1;
			if (mizarazaraSigne[0].match(/\-/)) premierTerme*=-1;
		}
	if (mizarazaraSigne[1].match(/\-/)) deuxiemeTerme*=-1;
		var casPrtcl1 = "x";
		if (modifEq[1]==casPrtcl1){ 
			deuxiemeTerme = 1;
			alert2 = "[Correct]";
			if (mizarazaraSigne[1].match(/\-/)) deuxiemeTerme*=-1;
		}
	if (mizarazaraSigne[2].match(/\-/)) troisiemeTerme*=-1;



var longueuR = modifEq.length;
if( longueuR== 3)
{
	if (alert1=="[Correct]" && alert2=="[Correct]" && alert3=="[Correct]")
	{
		document.getElementById("scanf").readOnly = true;
		$("#solve").animate({
			opacity:'0'
		});
		$("#btn1").delay("1000").animate({
			height: '8px',
			top:'160px',
			width: '85%'
		},1000).css({
			'backgroundColor': ' #0df'
		});
		$("input").animate({
			top:'-170px',
			width:'85%'
		},100,"linear");
		$("h1").animate({
			top:'-120px',
			opacity:'0'
		},1000);
		$(".elm").delay("2000").css({
			'opacity':'0'
		}).animate({
			opacity:'1'
		});
		$("#rtr").delay("2500").css({
			'opacity': '0'
		}).animate({
			opacity:'1',
			bottom:'20px'
		}).css({
			'display': 'block'
		});
		$("#retour1").css({
			
		});
		$("#rtr").click(function() {
			$("#card1").animate({
				left:' 50px'
			});
			$("#rtr").animate({
				bottom:'-50px'
			}).css({
				'display': 'none'
			});
			$("input").animate ({
		       top:'0px',
		       width:'75%'
		    });
			$("#btn1").animate({
		        top:'0px',
		        width:'50%',
				height:'72px'
			}).css({
			'background': '#1c1b21'
			});
		    $("#solve").animate({
				opacity:'1',
		  	});
		    $("h1").delay (700).animate({
				top:'0px',
				opacity:'1'
		    },1000);
			$(".elm").delay("500").css({
				'opacity':'1'
			}).animate({
				opacity:'0'
			});
			document.getElementById("scanf").readOnly =false;
			});
		var a = premierTerme;
		var b = deuxiemeTerme;
		var c = troisiemeTerme;
		var delta = Math.pow(b,2)-4*a*c;
		var racineDelta = Math.sqrt(delta)
		document.getElementById("delta").innerHTML =  "(∆) = b² - 4ac = "+delta;
		if (delta > 0) {
			document.getElementById("rcnDelta").innerHTML = " √∆ = "+racineDelta.toFixed(2);
			$(document).ready(function() {
				$("#solution").css({
					display:'flex',
					flexDirection:'row',
					justifyContent:'center'
				});
			});
			var x1 = ((b*-1)+racineDelta)/(2*a);
			var x2 = ((b*-1)-racineDelta)/(2*a);
			document.getElementById("x1").innerHTML = "x1 = " + x1.toFixed(2);
			document.getElementById("x2").innerHTML = "x2 = " + x2.toFixed(2);
		}
			else{
				$(document).ready(function() {
					$("#solution").css({
						display:'flex',
						flexDirection:'column'
					});
				});
			}
		if (delta < 0) {
			document.getElementById("rcnDelta").style.top='80px';
			document.getElementById("rcnDelta").innerHTML = "The solution is null" ;
			$(document).ready(function() {
				$("#solution").css({
					display:'none'
				});
			});
		}else document.getElementById("rcnDelta").style.top='0px';

		if (delta==0) {
			document.getElementById("rcnDelta").innerHTML = "d'où √∆ = "+racineDelta;
			$(document).ready(function() {
				$("#solution").css({
					flexDirection:'row',
					justifyContent:'center'
				});
				$("#x2").css({
					display:'none'
				});
			});
			var x= (-b)/(2*a);
			document.getElementById("x1").innerHTML = "Alors la solution est <br> x = " + x;
		}else{
			$(document).ready(function() {
				$("#x2").css({
					display:'block'
				});
			});
		}


	}
	else
	{
		$(document).ready(function() {
			$("#alert").animate({
				opacity:'1'
			}).delay(1000).animate({
				opacity:'0'
			});
		});
	}

}else
	{
		$(document).ready(function() {
			$("#alert").animate({
				opacity:'1'
			}).delay(1000).animate({
				opacity:'0'
			});
		});
	}
}
	







/***********CRAMER***********/
$(document).ready(function() {
	$("#card2").click(function() {
		$("#cramerInput,#bttnCard2").delay(600).animate({
			opacity:'1'
		});
	});
});
function cramer() {
	var l0_c0 =document.getElementById("l0_c0").value;
	var l0_c1 =document.getElementById("l0_c1").value;
	var xx =document.getElementById("xx").value;
	var l1_c0 =document.getElementById("l1_c0").value;
	var l1_c1 =document.getElementById("l1_c1").value;
	var yy =document.getElementById("yy").value;

$(document).ready(function() {
		if(l0_c0 /*&& l0_c1 && l1_c0 && l1_c1 && xx && yy*/!=''){
			$("#bttnCard2").animate({
				height: '8px',
				top:'285px',
				width: '85%'
			},500).css({
				'backgroundColor': ' #0df'
			});
			$("#cramerInput").animate({
				top:'-100px'
			},750);
			$("#solve1").animate({
				opacity:'0'
			});
			$("#rtr1").animate({
				opacity:'1',
				bottom:'20px'
			},'slow');
			$("#solutionCramer").delay(2000).animate({
				opacity:'1'
			},2000);
			$('#rtr1').click(function() {
				$("#bttnCard2").animate({
					height:'72px',
					top:'0',
					width:'50%'
				}).css({'color':'#eff4ff'});
				$("#cramerInput").delay(500).animate({
					top:'0px'
				},1000);
				$('#rtr1').delay(500).animate({
					bottom:'-150px'
				},'slow');
				$("#solve1").animate({
					opacity:'1'
				});
				$("#sltnCramer2").animate({
					opacity:'1',
					width:'180px',
					height:'30px',
					margin:'10px'
				},2000);
				$("#solutionCramer").delay(1000).animate({
					opacity:'0'
				},'fast');				
				$("#dtrmn").animate({
					opacity:'1',
					width:'80px',
					height:'52px'
				},2000);
			});
	}else 
		{
			$(document).ready(function() {
				$("#alert1").animate({
					opacity:'1',
					height:'30px',
					fontSize:'1em',
					padding:'5px'
				}).delay(1000).animate({
					opacity:'0',
					height:'0px',
					fontSize:'0',
					padding:'0'
				});
			});
		}
	}); 
	

	var matrix = 
	[
		[l0_c0 , l0_c1],
		[l1_c0 , l1_c1]
	];
	var delta = (matrix[0][0]*matrix[1][1])-(matrix[1][0]*matrix[0][1]);
	var delta_X = (xx*matrix[1][1])-(matrix[0][1]*yy);
	var delta_Y = (yy*matrix[0][0])-(matrix[1][0]*xx);
	var solution1 = delta_X/delta;
	var solution2 = delta_Y/delta;
	console.log("delta_X" + delta_X);
	console.log("delta_Y" + delta_Y);
	console.log("X" + solution1);
	console.log("Y" + solution2);

var l0c0 = document.querySelectorAll(".l0c0");
var l1c0 = document.querySelectorAll(".l1c0");
var l0c1 = document.querySelectorAll(".l0c1");
var l1c1 = document.querySelectorAll(".l1c1");
var x = document.querySelectorAll(".xx");
var y = document.querySelectorAll(".yy");
for (var i = 0;i<l0c0.length; i++)
{
	l0c0[i].innerHTML = l0_c0;
	l1c0[i].innerHTML = l1_c0;
	l0c1[i].innerHTML = l0_c1;
	l1c1[i].innerHTML = l1_c1;
}
x[0].innerHTML=xx;
y[0].innerHTML=yy;
x[1].innerHTML=xx;
y[1].innerHTML=yy;

// DELTA PRINCIPALE
if (delta!=0) 
{
	$(document).ready(function (){
		$("#sX,#sY").css({'display':'block'});
		$(".solution").css({'display':'block'})
	 });
	document.getElementById("sltnCramer2").innerHTML = "  = ("+l0_c0+"×"+l1_c1+") - "+"("+l1_c0+"×"+l0_c1+") = "; 
	document.getElementById("sltnCramer3").innerHTML = delta;
	document.getElementById("sltnCramer4").innerHTML = "● (∆) ≠ 0 , x and y exists ";


//SOLUTION
document.getElementById("solution1").innerHTML = solution1.toFixed(2);
document.getElementById("solution2").innerHTML = solution2.toFixed(2);

}
else {

	$(document).ready(function (){
		$("#sX,#sY").css({'display':'none'});
		$(".solution").css({'display':'none'})
	 });

	document.getElementById("sltnCramer2").innerHTML = "  = ("+l0_c0+"×"+l1_c1+") - "+"("+l1_c0+"×"+l0_c1+") =  "; 
	document.getElementById("sltnCramer3").innerHTML =  delta;
	document.getElementById("sltnCramer4").innerHTML = "● (∆) = 0 INFINITY SOLUTION ";
}
// DELTA X
document.getElementById("sltnCramer5").innerHTML = " = ("+l0_c0+"×"+l1_c1+") - "+"("+l1_c0+"×"+l0_c1+") = ";


















}


 















// $(document).ready(function() {
// 			$("#card2").click(function(){
// 				$("#card1").animate({
// 					top:"200px",
// 					left:'-500px',
// 					width:'0', 
// 					height:'0'
// 				}).hide(500);
// 				$("#card3").animate({
// 					top:"200px",
// 					left:'500px',
// 					width:'0',
// 					height:'0'
// 				}).hide(500);
// 				$("#card2").toggleClass("added",true,2000).toggleClass("added1",true,2000);
// 			});
// 			$("#card1").click(function(){
// 				$("#card1").toggleClass("added",true).toggleClass("added1",true,2000);
// 				$("#card2").animate({
// 					opacity:'0',
// 					top:"200px",
// 					left:'-500px',
// 					width:'0', 
// 					height:'0'
// 				}).hide(500);
// 				$("#card3").animate({
// 					opacity:'0',
// 					top:"200px",
// 					left:'500px',
// 					width:'0',
// 					height:'0'
// 				}).hide(500);
// 			});
// 			$("#card3").click(function(){
// 				$("#card1").animate({
// 					opacity:'0',
// 					top:"200px",
// 					left:'-500px',
// 					width:'0', 
// 					height:'0'
// 				}).hide(500);
// 				$("#card2").animate({
// 					opacity:'0',
// 					top:"200px",
// 					left:'500px',
// 					width:'0',
// 					height:'0'
// 				}).hide(500);
// 				$("#card3").toggleClass("added",true);
// 			});
// 			 $("button").click(function(){
// 				$("#card1").animate({
// 					opacity:'1',
// 					top:'0',
// 					left:'0',
// 					width:'300px',
// 					height:'400px'
// 				}).show(500).toggleClass("added",false).toggleClass("added1",false,2000);
// 				$("#card2").animate({
// 					opacity:'1',
// 					top:'0',
// 					left:'0',
// 					width:'300px',
// 					height:'400px'
// 				}).show(500).toggleClass("added",false).toggleClass("added1",false,2000);
// 				$("#card3").animate({
// 					opacity:'1',
// 					top:'0',
// 					left:'0',
// 					width:'300px',
// 					height:'400px'
// 				}).show(500).toggleClass("added",false);
// 			 });
// 		});

