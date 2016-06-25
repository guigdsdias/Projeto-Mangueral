(function (angular, undefined) {
    'use strict';

    /* Services */
    angular.module('services', [])

    // declaração dos serviços
    .factory('ColorPalette', ColorPalette)
    .factory('ArrayServices', ArrayServices);

    // injeção de dependências
    ArrayServices.$inject = ['$http'];
    ColorPalette.$inject = ['$http'];

    /** construção dos serviços **/
    function ColorPalette($http) {

        var factory = {};

        factory.get = function(){
            return $http({
                url: "spa/resources/data/colorPalette.json",
                method: "GET"
            });
        };

        return factory;
    }

    function ArrayServices($http) {

        var factory = {};

        factory.add = function (arr,item) {
            var strArr  = JSON.stringify(arr);
			var strItem = JSON.stringify(item);
			if (strArr.indexOf(strItem) < 0){
				arr.push(item);
			};
        };

        factory.del = function(arr,item){
			var strArr  = JSON.stringify(arr);
			var strItem = JSON.stringify(item);
			if (strArr.indexOf(strItem) > -1){
				strArr = strArr.replace(strItem+",","");
				strArr = strArr.replace(","+strItem,"");
				strArr = strArr.replace(strItem,"");
				arr = JSON.parse(strArr);
			}
		}


        return factory;
    }


})(angular);
