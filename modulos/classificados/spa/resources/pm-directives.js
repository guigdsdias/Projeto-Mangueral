'use strict';

angular.module('pmDirectives', ['pmConstants'])

.directive('categoria',function(){
	return {
		restrict: 'E',
		transclude : true,
		scope: {
			cor: '@', href: '@', modal: '@', icone: '@', texto: '@', class: '@'
		},
		template: '<div class="menu-item {{cor}} {{class}}">'+
    			  '    <a href="{{href}}" data-toggle="{{modal ? \'modal\' : false}}">'+
		          '        <i class="fa {{icone}}"></i>'+
		          '        <p>{{texto}}</p>'+
		          '    </a>'+
				  '</div>'
	};
})

.directive('visualizaAnuncio',function(){
	return {
		restrict: 'E',
		scope: {parte: '@', caracteristicas: '='},
		template: '<div ng-include="getContentUrl()">',
		link: function(scope,elem,attrs){
			scope.getContentUrl = function(){
				switch (scope.parte) {
					case "titulo":
						return 'spa/templates/visualiza/titulo.tpl.html';
					case "descricao":
						return 'spa/templates/visualiza/descricao.tpl.html';
					case "caracteristicas":
						return 'spa/templates/visualiza/caracteristicas.tpl.html';
					case "troca":
						return 'spa/templates/visualiza/troca.tpl.html';
				}
			}
		}
		// templateUrl: 'spa/templates/visualiza/titulo.tpl.html'
	}
})
// .directive('visualizaAnuncioCaracteristicas',function(){
// 	return {
// 		restrict: 'E',
// 		scope: {},
// 		templateUrl: 'spa/templates/visualiza/titulo.tpl.html'
// 	}
// })
// .directive('visualizaAnuncioTitulo',function(){
// 	return {
// 		restrict: 'E',
// 		scope: {},
// 		templateUrl: 'spa/templates/visualiza/titulo.tpl.html'
// 	}
// })
// .directive('visualizaAnuncioTitulo',function(){
// 	return {
// 		restrict: 'E',
// 		scope: {},
// 		templateUrl: 'spa/templates/visualiza/titulo.tpl.html'
// 	}
// })
;
