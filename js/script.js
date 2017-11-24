$(document).ready(function(){

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
