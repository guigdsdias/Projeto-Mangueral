'use strict';

angular.module('htmlDirectives', ['constants'])

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
.directive('hLine',function(){
	return {
		restrict: 'E',
		transclude: true,
		scope: { id: '@', label: '@' , width: '@'},
		template:	'<div class="form-group">' +
					'	<label for="{{id}}" class="col-sm-2 control-label">' +
					'		{{label}}' +
					'	</label>' +
					'	<div class="col-sm-{{width}}" data-ng-transclude>'+
					'	</div>' +
					'</div>'
	}
})

.directive('hTextField',function(){
	return {
		restrict: 'E',
		transclude: false,
		scope: { id: '@', label: '@' , width: '@' , type: '@', model:'=ngModel'},
		template:'<div class="form-group">' +
					'	<label for="{{id}}" class="col-sm-2 control-label">' +
					'		{{label}}' +
					'	</label>' +
					'	<div class="col-sm-{{width}}">'+
					'		<input class="form-control" id="{{id}}" type="{{type}}" ng-model="model" />' +
					'	</div>' +
					'</div>'
	}
})

.directive('hColorPalette',function($http,ColorPalette){
	return{
		restrict: 'E',
		transclude: false,
		scope: {id: '@', label: '@', width: '@', selected: '@', model: '='},
		templateUrl: "spa/templates/htmlDirectives/colorPalette.html",
		link: function(scope,elem,attrs){

			scope.defineCor = function(item){
				scope.model = item;
			}

			scope.cores = {};
			ColorPalette.get().then(function(response){
				for (var i in response.data){
					var e = response.data[i];
					scope.cores[e.cor] = e.texto;
				}
				scope.listaCores = response.data;
			});

			// recupera a cor quando for selecionado um item para alteração
			scope.$watch("model",function(oldV,newV){
				scope.model.texto = scope.cores[scope.model.cor];
			});
		}
	}
})

.directive('showModal', function(){
	return {
		restrict: 'E',
		transclude: true,
		scope: {for:'@', type:'@'},
		template:	'<button type="button" id="btn_{{for}}" class="btn btn-{{type ? type : link}}" data-toggle="modal" data-target=".{{for}}">' +
					'	<span data-ng-transclude></span>' +
					'	<label for="btn_{{for}}" style="cursor:pointer"><i class="fa fa-external-link-square" aria-hidden="true"></i></label>' +
					'</button>'

	}
})

.directive('modalIcons',function($http){
	return {
		restrict: 'E',
		transclude: false,
		scope: {id:'@', ngModel:'='},
		templateUrl: "spa/templates/htmlDirectives/modal-icons.html",
		link: function (scope,elem,attrs){

			scope.filtro = "";

			scope.selecionar = function (icone){
				scope.ngModel='fa-'+icone;
			}

			$http({
				url: "spa/resources/data/fontawesome.json",
				method: "GET"
			}).then(function(response){
				scope.listaIcones = (response.data);
			});
		}
	}
})

.directive('modal', function(){
	return{
		restrict: 'E',
		transclude: true,
		scope: {id: '@', title: '@', width: '@', icons: '=' },
		templateUrl: "spa/templates/htmlDirectives/modal.html"
	}
});
