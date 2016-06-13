angular.module("pmAdmin", [
    'ngResource',
    'ngRoute',
    'htmlDirectives',
    'constants',
    'moduloCategoriaController',
    'inserirCategoriaController',
    'alterarCategoriaController',
    'htmlServices',
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
        when('/categoria',         {templateUrl: 'spa/pages/categoria/categoria.html',          controller: 'categoriaController as vm'}).
        when('/categoria/:id',     {templateUrl: 'spa/pages/categoria/manter-categoria.html',  controller: 'alterarCategoriaController as vm'}).
        when('/inserir-categoria', {templateUrl: 'spa/pages/categoria/manter-categoria.html',  controller: 'inserirCategoriaController as vm'}).

        when('/subcategoria', {templateUrl: 'spa/pages/subcategoria/sub-categoria.html', controller: 'subCategoriaController as vm'}).
        otherwise({
            redirectTo: '/categoria'
        });
    }
])

.run(['$route', function ($route) {
    //console.debug('');
}]).run(['$route', angular.noop]);
