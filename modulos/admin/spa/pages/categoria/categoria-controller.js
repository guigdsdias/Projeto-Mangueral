(function() {
	
	'use strict';
	
	// angular.module('moduloCategoriaController',['ngGrid','ngTable'])
	angular.module('moduloCategoriaController',['ngTable','ngTableResizableColumns','ui','ui.sortable'])

	.controller('categoriaController', categoriaController);

	categoriaController.$inject = ['$http','$rootScope','$scope','ngTableParams','$templateCache','$filter'];

	function categoriaController($http, $rootScope, $scope, ngTableParams,$templateCache,$filter){

		var vm = this;

		vm.dados = [{"id":"1","nome":"Veículos","cor":"blue","fa_icone":"fa-automobile","ordem":"1"},{"id":"2","nome":"Animais","cor":"green","fa_icone":"fa-paw","ordem":"2"},{"id":"3","nome":"Para sua Casa","cor":"color","fa_icone":"fa-home","ordem":"3"},{"id":"4","nome":"Eletronicos e Celulares","cor":"light-orange","fa_icone":"fa-mobile-phone","ordem":"4"},{"id":"5","nome":"Imoveis","cor":"light-red","fa_icone":"fa-building","ordem":"4"},{"id":"6","nome":"Negocios e Empregos","cor":"color","fa_icone":"fa-users","ordem":"5"},{"id":"7","nome":"Esportes","cor":"blue","fa_icone":"fa-bicycle","ordem":"6"}];

		vm.filtroPesquisa = {nomeEstadoConta: 'Ativa', codigoAgencia: '', numeroConta: ''};

		$http({
			url: "http://localhost/apirest/admin/categoria",
			method: "GET"
		}).then(function(response){
			vm.listaCategoria = response.data;

			// ngTable
			vm.tableParams = new ngTableParams({count:100}, { dataset: vm.listaCategoria , counts:[], update: function(e,ui){console.log(e);}});

			vm.sortingLog = [];

			vm.sortableOptions = {
				start: function(event, ui) {
					var ini_pos = ui.item.index();
					ui.item.data('ini_pos', ini_pos);
				},
				beforeStop: function(event, ui) {

					var ini_pos = ui.item.data('ini_pos')+1;
					var fin_pos = ui.placeholder.index();

					var desceu = (ini_pos < fin_pos);
					var subiu  = (fin_pos < ini_pos);

					if (desceu){
						for (var i=ini_pos+1;i<=fin_pos;i++){
							
							var elemento = Utils.obterElemento("ordem",i,vm.listaCategoria);
							elemento.ordem = (parseInt(elemento.ordem)-1).toString();
							$http.post("/apirest/admin/categoria/altera",elemento);

						}
					} else if (subiu) {
						
						for (var i=ini_pos-1;i>=fin_pos;i--){
							
							var elemento = Utils.obterElemento("ordem",i,vm.listaCategoria);
							elemento.ordem = (parseInt(elemento.ordem)+1).toString();
							console.log("update: ",elemento);
							$http.post("/apirest/admin/categoria/altera",elemento);

						}
					}
					
					vm.listaCategoria[ini_pos-1].ordem = fin_pos.toString();

					$http.post("/apirest/admin/categoria/altera",vm.listaCategoria[ini_pos-1]).success(function(response){
						// atualiza a lista
						$http.get("/apirest/admin/categoria").success(function(response){
							
							vm.listaCategoria = response;

							vm.tableParams = new ngTableParams({count:100}, { dataset: vm.listaCategoria, counts:[] });
							console.log(vm.tableParams);

						}).error(function(err){
							console.log("não foi possível ordenar a lista de categorias");
						});
					});

				}
			};

		});

		vm.changeSelection = function(item) {
			vm.selecionado = item;
		}

	}

})();