angular.module("pmAdmin", [
    'ngResource',
    'ngRoute',
	'kendo.directives',
    'moduloCategoriaController',
    'inserirCategoriaController'
/*	'pmDirectives',
	'pmConstants',
    'pmServices',
    'moduloIndexController',
    'moduloHomeController',
    'moduloSubCategoriaController',
    'moduloCarouselController'
*/])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
                when('/categoria',         {templateUrl: 'spa/pages/categoria/categoria.html',         controller: 'categoriaController as vm'}).
                when('/inserir-categoria', {templateUrl: 'spa/pages/categoria/inserir-categoria.html', controller: 'inserirCategoriaController as vm'}).
                
                when('/subcategoria', {templateUrl: 'spa/pages/subcategoria/sub-categoria.html', controller: 'subCategoriaController as vm'}).
                otherwise({
                    redirectTo: '/categoria'
                });
    }
])

.run(['$route', function ($route) {
    //console.debug('tfa-app.js:run');
}]).run(['$route', angular.noop]);