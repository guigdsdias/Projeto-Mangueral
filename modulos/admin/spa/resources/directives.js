'use strict';

angular.module('directives', ['constants'])

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

// horizontal form field
.directive('hField',function(){
	return {
		restrict: 'E',
		transclude: false,
		scope: { id: '@', label: '@' , width: '@' , type: '@'},
		template:	'<div class="form-group">' +
					'	<label for="{{id}}" class="col-sm-2 control-label">' +
					'		{{label}}' +
					'	</label>' +
					'	<div class="col-sm-{{width}}">' +
					'		<input class="form-control" id="{{id}}" type="{{type}}" />' +
					'	</div>' +
					'</div>'
	}
});
