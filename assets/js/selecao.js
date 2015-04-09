var letraA = "<li class='menu-campeao' value='aatrox'>Aatrox</li>" + 
"<li class='menu-campeao' value='ahri'>Ahri</li>" + 
"<li class='menu-campeao' value='akali'>Akali</li>" + 
"<li class='menu-campeao' value='alistar'>Alistar</li>" + 
"<li class='menu-campeao' value='amumu'>Amumu</li>" + 
"<li class='menu-campeao' value='anivia'>Anivia</li>" + 
"<li class='menu-campeao' value='annie'>Annie</li>" + 
"<li class='menu-campeao' value='ashe'>Ashe</li>" + 
"<li class='menu-campeao' value='azir'>Azir</li>";

var letraB = "<li class='menu-campeao' value='bardo'>Bardo</li>" + 
"<li class='menu-campeao' value='blitzcrank'>Blitzcrank</li>" + 
"<li class='menu-campeao' value='brand'>Brand</li>" + 
"<li class='menu-campeao' value='braum'>Braum</li>";

var letraC = "<li class='menu-campeao' value='caitlyn'>Caitlyn</li>" + 
"<li class='menu-campeao' value='cassiopeia'>Cassiopeia</li>" + 
"<li class='menu-campeao' value='chogath'>Cho'Gath</li>" + 
"<li class='menu-campeao' value='corki'>Corki</li>";

var letraD = "<li class='menu-campeao' value='darius'>Darius</li>" + 
"<li class='menu-campeao' value='diana'>Diana</li>" + 
"<li class='menu-campeao' value='dr.mundo'>Dr. Mundo</li>" + 
"<li class='menu-campeao' value='draven'>Draven</li>";

var letraE = "<li class='menu-campeao' value='elise'>Elise</li>" + 
"<li class='menu-campeao' value='Evelynn'>Evelynn</li>" + 
"<li class='menu-campeao' value='Ezreal'>Ezreal</li>";

var letraF = "<li class='menu-campeao' value='Fiddlesticks'>Fiddlesticks</li>" + 
"<li class='menu-campeao' value='Fiora'>Fiora</li>" + 
"<li class='menu-campeao' value='Fizz'>Fizz</li>";

var letraG = "<li class='menu-campeao' value='Galio'>Galio</li>" + 
"<li class='menu-campeao' value='Gangplank'>Gangplank</li>" + 
"<li class='menu-campeao' value='Garen'>Garen</li>" + 
"<li class='menu-campeao' value='alistar'>Gnar</li>" + 
"<li class='menu-campeao' value='amumu'>Graves</li>";

var letraH = "<li class='menu-campeao' value='aatrox'>Hecarim</li>" + 
"<li class='menu-campeao' value='ahri'>Heimerdinger</li>";

var letraI = "<li class='menu-campeao' value='aatrox'>Irelia</li>";

var letraJ = "<li class='menu-campeao' value='aatrox'>Janna</li>" + 
"<li class='menu-campeao' value='ahri'>Jarvan IV</li>" + 
"<li class='menu-campeao' value='akali'>Jax</li>" + 
"<li class='menu-campeao' value='alistar'>Jayce</li>" + 
"<li class='menu-campeao' value='amumu'>Jinx</li>";

$(document).ready(function(){

	$(".letra").on("click", function(){

		var campo = $(this);
		var letra = $(this).children("div").context.innerHTML;

		$( ".div-champions" ).animate({
			opacity: "0"
		}, 400, function() {
			$(".div-champions").remove();
			switch(letra) {
				case "A":
				$(campo).parent().parent().after("<div class='div-champions col-lg-12 col-sm-12 col-xs-12' style='opacity:0;'><hr><ul>" + letraA + "</ul></div>");
				break;
				case "B":
				$(campo).parent().parent().after("<div class='div-champions col-lg-12 col-sm-12 col-xs-12' style='opacity:0;'><hr><ul>" + letraB + "</ul></div>");
				break;
				case "C":
				$(campo).parent().parent().after("<div class='div-champions col-lg-12 col-sm-12 col-xs-12' style='opacity:0;'><hr><ul>" + letraC + "</ul></div>");
				break;
				case "D":
				$(campo).parent().parent().after("<div class='div-champions col-lg-12 col-sm-12 col-xs-12' style='opacity:0;'><hr><ul>" + letraD + "</ul></div>");
				break;
				case "E":
				$(campo).parent().parent().after("<div class='div-champions col-lg-12 col-sm-12 col-xs-12' style='opacity:0;'><hr><ul>" + letraE + "</ul></div>");
				break;
				case "F":
				$(campo).parent().parent().after("<div class='div-champions col-lg-12 col-sm-12 col-xs-12' style='opacity:0;'><hr><ul>" + letraF + "</ul></div>");
				break;
				case "G":
				$(campo).parent().parent().after("<div class='div-champions col-lg-12 col-sm-12 col-xs-12' style='opacity:0;'><hr><ul>" + letraG + "</ul></div>");
				break;
				case "H":
				$(campo).parent().parent().after("<div class='div-champions col-lg-12 col-sm-12 col-xs-12' style='opacity:0;'><hr><ul>" + letraH + "</ul></div>");
				break;
				case "I":
				$(campo).parent().parent().after("<div class='div-champions col-lg-12 col-sm-12 col-xs-12' style='opacity:0;'><hr><ul>" + letraI + "</ul></div>");
				break;
				case "J":
				$(campo).parent().parent().after("<div class='div-champions col-lg-12 col-sm-12 col-xs-12' style='opacity:0;'><hr><ul>" + letraJ + "</ul></div>");
				break;
				case "K":
				$(campo).parent().parent().after("<div class='div-champions col-lg-12 col-sm-12 col-xs-12' style='opacity:0;'><hr><ul>" + letraA + "</ul></div>");
				break;
				case "L":
				$(campo).parent().parent().after("<div class='div-champions col-lg-12 col-sm-12 col-xs-12' style='opacity:0;'><hr><ul>" + letraD + "</ul></div>");
				break;
				default:
				break;
			}



			$( ".div-champions" ).animate({
				opacity: "1"
			}, 400);

		});
console.log(letraA);

});


});