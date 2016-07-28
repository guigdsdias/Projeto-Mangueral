angular.module("pmApp", [
    'ngRoute',
	  'kendo.directives',
	  'pmDirectives',
	  'pmConstants',
    'pmServices',
    'moduloIndexController',
    'moduloHomeController',
    'moduloSubCategoriaController',
    'moduloCarouselController',
    'cadastroUsuarioELoginModule',
    'portalMangueiralFactory'
])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
               when('/home',         {templateUrl: 'spa/pages/home/home.html'}).
                // when('/subcategoria', {templateUrl: 'spa/pages/subcategoria/sub-categoria.html', controller: 'subCategoriaController as vm'}).
                // when('/carossel',     {templateUrl: 'spa/includes/home/carousel.html', controller: 'carouselController as vm'}).
               when('/cadastrese',
               {templateUrl: 'spa/pages/cadastro_de_usuario_login/cadastroUsuarioELogin.html',
                controller: 'cadastroUsuarioELoginController', controllerAs: 'ctrl'}).
//                when('/create', {templateUrl: 'create.html', controller: 'portalController'}).
//                when('/delete', {templateUrl: 'list.html', controller: 'portalController'}).
                otherwise({
                    redirectTo: '/home'
                });
    }
])

.run(['$route','$window','UserService', function ($route,$window,UserService) {

    //Configuracoes para a api do facebook
    $window.fbAsyncInit = function (){
      FB.init({
        appId: '1709596632615562',
        status: true,
        cookie: true,
        xfbml: true,
        version: 'v2.6'
      });

      // Carrega a SDK do facebook
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
