(function (angular, undefined) {
    'use strict';

    /* Services */

    angular.module('htmlServices', [])

    // declaração dos serviços
    .factory('TesteService', TesteService)
    .factory('ColorPalette', ColorPalette)

    // injeção de dependências
    TesteService.$inject = ['$http'];
    ColorPalette.$inject = ['$http'];

    /** construção dos serviços **/
    function ColorPalette($http) {

        var factory = {};

        factory.get = function(){
            return $http({
                url: "spa/resources/data/colorPalette.json",
                method: "GET"
            });
        }

        return factory;
    }

    function TesteService($http) {

        var factory = {};

        factory.get = function () {

            return {dados:[
                {id:1,uf:"DF"},
                {id:2,uf:"MG"},
                {id:3,uf:"SP"},
                {id:4,uf:"ES"},
                {id:5,uf:"GO"},
                {id:6,uf:"TO"},
                {id:7,uf:"PA"}
            ]};

            //return $http.get(PltConfig.baseAPIPath + '/v1/usuarioLogado', {cache: 'true', params : parametrosDePesquisa});
        };

        return factory;
    };


})(angular);
