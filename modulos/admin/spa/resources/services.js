(function (angular, undefined) {
    'use strict';

    /* Services */

    angular.module('pmServices', [])

    // declaração dos serviços
    .factory('TesteService', TesteService)
    
    // injeção de dependências    
    TesteService.$inject = ['$http'];
    
    /** construção dos serviços **/
    
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