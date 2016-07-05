angular.module("pmApp", [
    'ngRoute',
	'kendo.directives',
	'pmDirectives',
	'pmConstants',
    'services',
    'moduloIndexController',
    'moduloHomeController',
<<<<<<< HEAD
    'moduloSubCategoriaController',
    'moduloCarouselController',
    'portalMangueiralFactory'
=======
    'moduloCarouselController',
    'moduloInserirController',
    'htmlDirectives',
    'constants'
>>>>>>> origin/fernando
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

.run(['$route','$window','UserService', function ($route,$window,UserService) {
    //console.debug('tfa-app.js:run');

    $window.fbAsyncInit = function (){
      FB.init({
        appId: '1709596632615562',
        status: true,
        cookie: true,
        xfbml: true,
        version: 'v2.6'
      });

      (function (d){
        var js;
        id = 'facebook-jssdk';
        ref = d.getElementsByTagName('script')[0];

        if (d.getElementById(id)){
          return;
        }

        js = d.createElement('script');
        js.id = id;
        js.async = true;
        js.src = '//connect.facebook.net/en_US/sdk.js';
        ref.parentNode.insertBefore(js, ref);

      })(document);

    };

}]).run(['$route', angular.noop]);
