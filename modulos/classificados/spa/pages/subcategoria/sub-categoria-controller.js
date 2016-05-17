(function() {
	
    'use strict';
	
	angular.module('moduloSubCategoriaController',[])

	.controller('subCategoriaController', subCategoriaController);

	subCategoriaController.$inject = ['$http','$rootScope','$scope'];

	function subCategoriaController($http, $rootScope, $scope){

        var vm = this;

        vm.marca = {
            selecionados: null,
            lista: new kendo.data.DataSource()
        };

        $http.get('spa/pages/subcategoria/marca.json').success(function (data) {
            vm.marca.lista.data(data);
            vm.marca.selecionados = ["2"];
        });

        vm.modelo = {
            selecionados: null,
            lista: new kendo.data.DataSource()
        }

        $http.get('spa/pages/subcategoria/modelo.json').success(function (data) {
            vm.modelo.lista.data(data);
            vm.modelo.selecionados = ["2"];
        });


        vm.ano = {
          "min": 1950,
          "max": 2016
        };



    }

})();