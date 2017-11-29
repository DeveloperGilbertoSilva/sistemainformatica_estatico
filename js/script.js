$(document).ready(function(){
	$(".button_open_menu").click(function(){
		$(".container-fluid").hide();
		$(".copyright").hide();
		$(".container_menu_small").show();
	});

	$(".button_close_menu").click(function(){
		$(".container-fluid").show();
		$(".copyright").show();
		$(".container_menu_small").hide();
	});
});