$(document).ready(function(){
	$("#menu_cabeamento_small").click(function(){
		$(".content_tema_servico_small").show();
		$("#bloco_cabeamento_small").fadeIn();
		$(".container-fluid").hide();
		$(".copyright").hide();
	});
	$("#menu_governanca_small").click(function(){
		$(".content_tema_servico_small").show();
		$("#bloco_governanca_small").fadeIn();
		$(".container-fluid").hide();
		$(".copyright").hide();
	});
	$("#menu_assistencia_small").click(function(){
		$(".content_tema_servico_small").show();
		$("#bloco_assistencia_small").fadeIn();
		$(".container-fluid").hide();
		$(".copyright").hide();
	});
	$("#menu_atendimento_small").click(function(){
		$(".content_tema_servico_small").show();
		$("#bloco_atendimento_small").fadeIn();
		$(".container-fluid").hide();
		$(".copyright").hide();
	});

	$(".content_tema_servico_small button").click(function(){
		$(".content_tema_servico_small").hide();
		$(".bloco_content_servico_small").hide();
		$(".container-fluid").show();
		$(".copyright").show();
	});


	$("#menu_cabeamento").click(function(){

		$("#menu_cabeamento").css('background','#252422');	
		$("#menu_governanca").css('background','grey');
		$("#menu_assistencia").css('background','grey');
		$("#menu_atendimento").css('background','grey');

		$("#bloco_cabeamento").show();
		$("#bloco_governanca").hide();
		$("#bloco_assistencia").hide();
		$("#bloco_atendimento").hide();
	});

	$("#menu_governanca").click(function(){

		$("#menu_cabeamento").css('background','grey');	
		$("#menu_governanca").css('background','#252422');
		$("#menu_assistencia").css('background','grey');
		$("#menu_atendimento").css('background','grey');

		$("#bloco_cabeamento").hide();
		$("#bloco_governanca").show();
		$("#bloco_assistencia").hide();
		$("#bloco_atendimento").hide();
	});

	$("#menu_assistencia").click(function(){

		$("#menu_cabeamento").css('background','grey');	
		$("#menu_governanca").css('background','grey');
		$("#menu_assistencia").css('background','#252422');
		$("#menu_atendimento").css('background','grey');

		$("#bloco_cabeamento").hide();
		$("#bloco_governanca").hide();
		$("#bloco_assistencia").show();
		$("#bloco_atendimento").hide();
	});

	$("#menu_atendimento").click(function(){

		$("#menu_cabeamento").css('background','grey');	
		$("#menu_governanca").css('background','grey');
		$("#menu_assistencia").css('background','grey');
		$("#menu_atendimento").css('background','#252422');

		$("#bloco_cabeamento").hide();
		$("#bloco_governanca").hide();
		$("#bloco_assistencia").hide();
		$("#bloco_atendimento").show();
	});
});

$(window).resize(function(){
	if($(window).width()>=768){
		$(".content_tema_servico_small").hide();
		$(".bloco_content_servico_small").hide();
		$(".container-fluid").show();
		$(".copyright").show();
	}
});