(function() {
	'use strict';

	angular.module('moduloPesquisaController',['ngAnimate', 'ui.bootstrap', 'ngFileUpload', 'ngImgCrop','ngAnimate'])

	.controller('pesquisaController', pesquisaController);

	pesquisaController.$inject = ['$http','$rootScope','$scope','INCLUDES', 'ArrayServices', 'Upload', '$location','$route'];
	function pesquisaController($http, $rootScope, $scope, INCLUDES, ArrayServices, Upload, $location, $route){

		var vm = this;
		vm.visualizacao = {
			caracteristicas: [{chave:"Marca",valor:"Fiat"},{chave:"Ano",valor:"2016"},{chave:"Cor",valor:"Prata"},{chave:"Novo/Usado",valor:"Usado"}],
			imagens: [
				"http://arquivos.arsenalcar.com.br/ml/produtos_cod/4058/imagem1.jpg",
				"http://www.dezeroacem.com.br/wordpress/wp-content/uploads/blogger/_ssXXvhqSEcw/TC0bK-Q7xXI/AAAAAAAAEVY/sMAmV13WCAg/s1600/Punto2011Essence01.jpg",
				"http://autossegredos.com.br/wp-content/uploads/2011/02/palioetor3.jpg"
			]

		}
	}

})();
