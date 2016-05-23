(function (angular, undefined) {

    'use strict';

//	var includes = "spa/includes/home/";
//	var modals   = "spa/modals/home/";
	var includes = "spa/includes/home/";
	var modals   = "spa/modals/home/";
	var pages	 = "spa/pages/home/"
    
    angular.module('pmConstants', [])

    .constant('PARAMS',{
		"index":{
			"includes":{
				home: 	  pages	  +"home.html",
				logo:     includes+"logo.html",
				esquerda: includes+"esquerda.html",
				centro:   includes+"centro.html",
				carousel: includes+"carousel.html",
				copyright:includes+"copyright.html",
				direita:  includes+"direita.html",
				modal:    {
							modals: 	 modals+"modals.html",
							home:        modals+"home-modal.html",
							portfolio:   modals+"portfolio-modal.html",
							aboutus:     modals+"aboutus-modal.html",
							services:    modals+"services-modal.html",
							team:        modals+"team-modal.html",
							news:  		 modals+"news-modal.html",
							testimonial: modals+"testimonial-modal.html",
							contact:     modals+"contact-modal.html"
				} // modal
			} // includes
		} // index
    })
    
    .constant(
    
    'MSG',{
		VALIDACAO: {
		},
		ALTERACAO: {
		},
		CADASTRO:{
		},
		CANCELAMENTO:{
		},
		DADO:{
			VAZIO:""
		}
    })
    
})(angular);