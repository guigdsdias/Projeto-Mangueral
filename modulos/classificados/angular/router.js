angular.module("pmApp", [
    'ngRoute',
	'kendo.directives',
	'pmDirectives',
	'pmConstants',
    'pmServices',
    'moduloIndexController',
    'moduloHomeController',
    'moduloSubCategoriaController',
    'moduloCarouselController'
])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
                when('/home',         {templateUrl: 'spa/pages/home/home.html'}).
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

.run(['$route','$window', function ($route,$window) {
    //console.debug('tfa-app.js:run');

    var watchLoginChange = function() {

    var _self = this;

    FB.Event.subscribe('auth.authResponseChange', function(res) {
      console.log(res.status);
      if (res.status === 'connected') {

        /*
         The user is already logged,
         is possible retrieve his personal info
        */

        /*
         This is also the point where you should create a
         session for the current user.
         For this purpose you can use the data inside the
         res.authResponse object.
        */
        console.log(res.authResponse );
      }
        else {

        /*
         The user is not logged to the app, or into Facebook:
         destroy the session on the server.
        */

      }

      });

    };

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
        watchLoginChange();
        ref.parentNode.insertBefore(js, ref);
      })(document);

    };

}]).run(['$route', angular.noop]);
