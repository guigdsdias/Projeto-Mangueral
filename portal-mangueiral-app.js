(function (){
  'use strict';

  angular.module('PortalMangueiralApp',['ngRoute', 'cadastroUsuarioELoginModule', 'portalMangueiralFactory'])
  .config(['$routeProvider',function ($routeProvider){

    $routeProvider
    .when('/usuarioCadastroLogin', {
      templateUrl : 'modulos/cadastro_de_usuario_login/spa/cadastroUsuarioELogin.html',
      controller: 'cadastroUsuarioELoginController', controllerAs: 'ctrl'}
    ).otherwise({
        redirectTo: '/usuarioCadastroLogin'
    });

  }])
  .run(['$rootScope', '$window',
  function ($rootScope, $window){

    $rootScope.user = {};

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
  }])
  .run(['$route', angular.noop]);

})();
