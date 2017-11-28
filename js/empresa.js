$(document).ready(function(){
	$("#menu_historico_small").click(function(){
		$(".content_tema_empresa_small").show();
		$("#bloco_historico_small").fadeIn();
		$(".container-fluid").hide();
		$(".copyright").hide();
	});
	$("#menu_visao_small").click(function(){
		$(".content_tema_empresa_small").show();
		$("#bloco_visao_small").fadeIn();
		$(".container-fluid").hide();
		$(".copyright").hide();
	});
	$("#menu_missao_small").click(function(){
		$(".content_tema_empresa_small").show();
		$("#bloco_missao_small").fadeIn();
		$(".container-fluid").hide();
		$(".copyright").hide();
	});
	$("#menu_valores_small").click(function(){
		$(".content_tema_empresa_small").show();
		$("#bloco_valores_small").fadeIn();
		$(".container-fluid").hide();
		$(".copyright").hide();
	});
	$("#menu_equipe_small").click(function(){
		$(".content_tema_empresa_small").show();
		$("#bloco_equipe_small").fadeIn();
		$(".container-fluid").hide();
		$(".copyright").hide();
	});

	$(".content_tema_empresa_small button").click(function(){
		$(".content_tema_empresa_small").hide();
		$(".bloco_content_empresa_small").hide();
		$(".container-fluid").show();
		$(".copyright").show();
	});



	$("#menu_historico").click(function(){

		$("#menu_historico").css('color','grey');	
		$("#menu_visao").css('color','#252422');
		$("#menu_missao").css('color','#252422');
		$("#menu_valores").css('color','#252422');
		$("#menu_equipe").css('color','#252422');



		$("#bloco_historico").show();
		$("#bloco_visao").hide();
		$("#bloco_missao").hide();
		$("#bloco_valores").hide();
		$("#bloco_equipe").hide();
	});

	$("#menu_visao").click(function(){

		$("#menu_historico").css('color','#252422');	
		$("#menu_visao").css('color','grey');
		$("#menu_missao").css('color','#252422');
		$("#menu_valores").css('color','#252422');
		$("#menu_equipe").css('color','#252422');

		$("#bloco_historico").hide();
		$("#bloco_visao").show();
		$("#bloco_missao").hide();
		$("#bloco_valores").hide();
		$("#bloco_equipe").hide();
	});

	$("#menu_missao").click(function(){

		$("#menu_historico").css('color','#252422');	
		$("#menu_visao").css('color','#252422');
		$("#menu_missao").css('color','grey');
		$("#menu_valores").css('color','#252422');
		$("#menu_equipe").css('color','#252422');

		$("#bloco_historico").hide();
		$("#bloco_visao").hide();
		$("#bloco_missao").show();
		$("#bloco_valores").hide();
		$("#bloco_equipe").hide();
	});

	$("#menu_valores").click(function(){

		$("#menu_historico").css('color','#252422');	
		$("#menu_visao").css('color','#252422');
		$("#menu_missao").css('color','#252422');
		$("#menu_valores").css('color','grey');
		$("#menu_equipe").css('color','#252422');

		$("#bloco_historico").hide();
		$("#bloco_visao").hide();
		$("#bloco_missao").hide();
		$("#bloco_valores").show();
		$("#bloco_equipe").hide();
	});

	$("#menu_equipe").click(function(){

		$("#menu_historico").css('color','#252422');	
		$("#menu_visao").css('color','#252422');
		$("#menu_missao").css('color','#252422');
		$("#menu_valores").css('color','#252422');
		$("#menu_equipe").css('color','grey');

		$("#bloco_historico").hide();
		$("#bloco_visao").hide();
		$("#bloco_missao").hide();
		$("#bloco_valores").hide();
		$("#bloco_equipe").show();
	});
});


$(window).resize(function(){
	if($(window).width()>=768){
		$(".content_tema_empresa_small").hide();
		$(".bloco_content_empresa_small").hide();
		$(".container-fluid").show();
		$(".copyright").show();
	}
});