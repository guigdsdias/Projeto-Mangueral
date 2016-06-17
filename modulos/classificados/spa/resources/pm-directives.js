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
});
