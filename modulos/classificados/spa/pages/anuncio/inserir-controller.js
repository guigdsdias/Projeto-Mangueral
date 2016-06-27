(function() {
	'use strict';

	angular.module('moduloInserirController',['ngAnimate', 'ui.bootstrap'])

	.controller('inserirController', inserirController);

	inserirController.$inject = ['$http','$rootScope','$scope','INCLUDES', 'ArrayServices'];

	function inserirController($http, $rootScope, $scope, INCLUDES, ArrayServices){

		var vm = this;
		// vm.includes = INCLUDES.index.files;

		vm.categoria = {};
		vm.titulo = "";
		vm.descricao = "";
		vm.preço = 0;
		vm.aceitaTroca = {'codigo':'S','texto':'Sim'};
		vm.trocaPor = [{}]; // aceita troca por qual(is) categoria(s) (multiplo)
		vm.subcategoria = [{}]; // multiplo
		vm.imagens = [];
		vm.exibirAutoDominio   = vm.exibirSelectDominio = false;

		vm.checkObjetivo = [{codigo:'O',texto:'Ofertar'},{codigo:'B',texto:'Buscar Produtos/Serviços'}];

		$http.get("/apirest/admin/categoria").success(function(response){
			vm.listaCategoria = [];
			response.forEach(function(e,i,a){
				vm.listaCategoria.push({
					codigo: e.id,
					texto: e.nome,
					icone: e.icone,
					cor: e.cor
				});
			});

		});

		$http.get("/apirest/admin/caracteristica").success(function(response){
			vm.listaCaracteristica = response;
		});

		vm.categoriaParaTroca = [];
		vm.categoriaSelecionada = function(item){
			var strCat = JSON.stringify(vm.categoriaParaTroca);
			var strItem = JSON.stringify(item);
			return (strCat.indexOf(strItem) > -1);
		}
		vm.selecionarCategoriaParaTroca = function(item){
			var strCat = JSON.stringify(vm.categoriaParaTroca);
			var strItem = JSON.stringify(item);

			// se o item já está na "vm.categoriaParaTroca": remove
			if (strCat.indexOf(strItem) > -1){
				strCat = strCat.replace(strItem+",","");
				strCat = strCat.replace(","+strItem,"");
				strCat = strCat.replace(strItem,"");
				vm.categoriaParaTroca = JSON.parse(strCat);
			} else { // se não: adiciona
				vm.categoriaParaTroca.push(item);
			}
		};

		vm.caracteristicas = [];
		vm.salvarCaracteristica = function(){
			var valorCaracteristica = (vm.valorCaracteristica.texto) ? vm.valorCaracteristica.texto : vm.valorCaracteristica;
			var item = {chave:vm.caracteristicaSelecionada.nome, valor:valorCaracteristica };
			ArrayServices.add(vm.caracteristicas,item);

			// remove a última caracteristca informada para evitar duplicação
			vm.listaCaracteristica = ArrayServices.del(vm.listaCaracteristica, vm.caracteristicaSelecionada);

			// limpa os dados
			vm.caracteristicaSelecionada = vm.valorCaracteristica = vm.addCaracteristica = null;
		};

		$scope.$watch("vm.valorCaracteristica",function(oldValue,newValue){
			if (vm.exibirSelectDominio && newValue && oldValue){
				vm.salvarCaracteristica();
			}
		});

		vm.construirDominio = function(strDominio){
			vm.dominio = [];
			strDominio.split("|").forEach(function(e,i,a){
				vm.dominio.push({texto:e});
			});

			if (vm.dominio[0].texto=="")
				vm.dominio = [];
		}
		// ao selecionar a característica é preciso buscar os valores possíveis para cada característica (dominio)
		vm.selecionarCaracteristica = function(item){

			vm.caracteristicaSelecionada=item;
			vm.listaCaracteristica.forEach(function(e,i,a){
				if (e.nome == item.nome){
					vm.construirDominio(e.dominio);
				}
			});

			vm.exibirAutoDominio   = false;
			vm.exibirSelectDominio = vm.dominio.length || false;

			if (!vm.exibirSelectDominio){
				$http({
					method: "GET", url: "/apirest/admin/caracteristica_categoria",
					params:{idCategoria:vm.categoria.codigo,idCaracteristica:item.id}
				}).then(function(response){
					if (response.data[0])
						vm.construirDominio(response.data[0].dominio);
					vm.exibirAutoDominio = vm.dominio.length || false;
				});
			}
		}

	}

})();
