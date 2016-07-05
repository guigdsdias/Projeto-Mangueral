angular.module("pmApp", [
    'ngRoute',
	'kendo.directives',
	'pmDirectives',
	'pmConstants',
    'services',
    'moduloIndexController',
    'moduloHomeController',
    'moduloCarouselController',
    'moduloInserirController',
    'htmlDirectives',
    'constants',
    'ui.utils.masks'    
])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
                when('/home',     {templateUrl: 'spa/pages/home/home.html',       controller: 'homeController as home'}).
                when('/anunciar', {templateUrl: 'spa/pages/anuncio/inserir.html', controller: 'inserirController as vm'}).
                // when('/subcategoria', {templateUrl: 'spa/pages/subcategoria/sub-categoria.html', controller: 'subCategoriaController as vm'}).
                // when('/carossel',     {templateUrl: 'spa/includes/home/carousel.html', controller: 'carouselController as vm'}).
//                when('/cadastrese', {templateUrl: 'pages/cadastrese.html',       controller: 'portalController'}).
//                when('/create', {templateUrl: 'create.html', controller: 'portalController'}).
//                when('/delete', {templateUrl: 'list.html', controller: 'portalController'}).
                otherwise({
                    redirectTo: '/home'
                });
    }
])

.run(['$route', function ($route) {
    //console.debug('tfa-app.js:run');
}]).run(['$route', angular.noop]);
