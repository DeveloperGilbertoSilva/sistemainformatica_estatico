$(document).ready(function(){

	if ($(window).width()>=768){
		$("#menu_historico").click(function(){
		$("#bloco_historico").show();
		$("#bloco_visao").hide();
		$("#bloco_missao").hide();
		$("#bloco_valores").hide();
		$("#bloco_equipe").hide();
	});

	$("#menu_visao").click(function(){
		$("#bloco_historico").hide();
		$("#bloco_visao").show();
		$("#bloco_missao").hide();
		$("#bloco_valores").hide();
		$("#bloco_equipe").hide();
	});

	$("#menu_missao").click(function(){
		$("#bloco_historico").hide();
		$("#bloco_visao").hide();
		$("#bloco_missao").show();
		$("#bloco_valores").hide();
		$("#bloco_equipe").hide();
	});

	$("#menu_valores").click(function(){
		$("#bloco_historico").hide();
		$("#bloco_visao").hide();
		$("#bloco_missao").hide();
		$("#bloco_valores").show();
		$("#bloco_equipe").hide();
	});

	$("#menu_equipe").click(function(){
		$("#bloco_historico").hide();
		$("#bloco_visao").hide();
		$("#bloco_missao").hide();
		$("#bloco_valores").hide();
		$("#bloco_equipe").show();
	});
	}

	else if($(window).width()<768){
		$("#menu_historico").click(function(){
		$("#bloco_historico").hide();
		$("#bloco_visao").hide();
		$("#bloco_missao").hide();
		$("#bloco_valores").hide();
		$("#bloco_equipe").hide();
	});

	$("#menu_visao").click(function(){
		$("#bloco_historico").hide();
		$("#bloco_visao").hide();
		$("#bloco_missao").hide();
		$("#bloco_valores").hide();
		$("#bloco_equipe").hide();
	});

	$("#menu_missao").click(function(){
		$("#bloco_historico").hide();
		$("#bloco_visao").hide();
		$("#bloco_missao").hide();
		$("#bloco_valores").hide();
		$("#bloco_equipe").hide();
	});

	$("#menu_valores").click(function(){
		$("#bloco_historico").hide();
		$("#bloco_visao").hide();
		$("#bloco_missao").hide();
		$("#bloco_valores").hide();
		$("#bloco_equipe").hide();
	});

	$("#menu_equipe").click(function(){
		$("#bloco_historico").hide();
		$("#bloco_visao").hide();
		$("#bloco_missao").hide();
		$("#bloco_valores").hide();
		$("#bloco_equipe").hide();
	});

	}
	
});
