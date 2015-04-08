

$(document).ready(function(){

	$(".letra").on("click", function(){

		var campo = $(this);

		$( ".div-champions" ).animate({
			opacity: "0"
		}, 400, function() {
			$(".div-champions").remove();
			$(campo).parent().parent().after("<div class='div-champions col-lg-12 col-sm-12 col-xs-12' style='opacity:0;'><p>olá</p></div>");
			$( ".div-champions" ).animate({
				opacity: "1"
			}, 400);

		});
			console.log("a");

		});


	});