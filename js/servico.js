$(document).ready(function(){
	$("#menu_cabeamento_small .icon").click(function(){
		$(".content_tema_servico_small").show();
		$("#bloco_cabeamento_small").fadeIn();
		$(".container-fluid").hide();
		$(".copyright").hide();
	});
	$("#menu_governanca_small .icon").click(function(){
		$(".content_tema_servico_small").show();
		$("#bloco_governanca_small").fadeIn();
		$(".container-fluid").hide();
		$(".copyright").hide();
	});
	$("#menu_assistencia_small .icon").click(function(){
		$(".content_tema_servico_small").show();
		$("#bloco_assistencia_small").fadeIn();
		$(".container-fluid").hide();
		$(".copyright").hide();
	});
	$("#menu_atendimento_small .icon").click(function(){
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


	$("#menu_cabeamento .icon").click(function(){

		$("#menu_cabeamento").css('color','grey');	
		$("#menu_governanca").css('color','#252422');
		$("#menu_assistencia").css('color','#252422');
		$("#menu_atendimento").css('color','#252422');
		$("#menu_cabeamento .icon").css('border-color','grey');
		$("#menu_governanca .icon").css('border-color','white');
		$("#menu_assistencia .icon").css('border-color','white');
		$("#menu_atendimento .icon").css('border-color','white');

		$("#bloco_cabeamento").show();
		$("#bloco_governanca").hide();
		$("#bloco_assistencia").hide();
		$("#bloco_atendimento").hide();
	});

	$("#menu_governanca .icon").click(function(){

		$("#menu_cabeamento").css('color','#252422');	
		$("#menu_governanca").css('color','grey');
		$("#menu_assistencia").css('color','#252422');
		$("#menu_atendimento").css('color','#252422');
		$("#menu_cabeamento .icon").css('border-color','white');
		$("#menu_governanca .icon").css('border-color','grey');
		$("#menu_assistencia .icon").css('border-color','white');
		$("#menu_atendimento .icon").css('border-color','white');

		$("#bloco_cabeamento").hide();
		$("#bloco_governanca").show();
		$("#bloco_assistencia").hide();
		$("#bloco_atendimento").hide();
	});

	$("#menu_assistencia .icon").click(function(){

		$("#menu_cabeamento").css('color','#252422');	
		$("#menu_governanca").css('color','#252422');
		$("#menu_assistencia").css('color','grey');
		$("#menu_atendimento").css('color','#252422');
		$("#menu_cabeamento .icon").css('border-color','white');
		$("#menu_governanca .icon").css('border-color','white');
		$("#menu_assistencia .icon").css('border-color','grey');
		$("#menu_atendimento .icon").css('border-color','white');

		$("#bloco_cabeamento").hide();
		$("#bloco_governanca").hide();
		$("#bloco_assistencia").show();
		$("#bloco_atendimento").hide();
	});

	$("#menu_atendimento .icon").click(function(){

		$("#menu_cabeamento").css('color','#252422');	
		$("#menu_governanca").css('color','#252422');
		$("#menu_assistencia").css('color','#252422');
		$("#menu_atendimento").css('color','grey');
		$("#menu_cabeamento .icon").css('border-color','white');
		$("#menu_governanca .icon").css('border-color','white');
		$("#menu_assistencia .icon").css('border-color','white');
		$("#menu_atendimento .icon").css('border-color','grey');

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