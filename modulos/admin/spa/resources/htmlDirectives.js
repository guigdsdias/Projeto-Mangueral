(function (){
	'use strict';

	angular.module('htmlDirectives', ['constants'])

	// .directive('categoria',function(){
	// 	return {
	// 		restrict: 'E',
	// 		transclude : true,
	// 		scope: {
	// 			cor: '@', href: '@', modal: '@', icone: '@', texto: '@', class: '@'
	// 		},
	// 		template: '<div class="menu-item {{cor}} {{class}}">'+
	// 							'    <a href="{{href}}" data-toggle="{{modal ? \'modal\' : false}}">'+
	// 							'        <i class="fa {{icone}}"></i>'+
	// 							'        <p>{{texto}}</p>'+
	// 							'    </a>'+
	// 							'</div>'
	// 	};
	// })

	// horizontal form field
	.directive('empty',function(){
		return {restrict: 'E', template: ''};
	})
	.directive('hLine',function(){
		return {
			restrict: 	'E',
			transclude: true,
			scope:		{ id: '@', label: '@' , width: '@', if:"=ngIf"},
			template:	'<div class="form-group">' +
						'	<label for="{{id}}" class="col-sm-2 control-label">' +
						'		{{label}}' +
						'	</label>' +
						'	<div class="col-sm-{{width}}" style="text-align:left;" data-ng-transclude>'+
						'	</div>' +
						'</div>'
		};
	})

	.directive('hTextField',function($compile){
		return {
			restrict: 	'E',
			replace: true,
			scope: 		{ id: '@', label: '@' , width: '@', placeholder: '@', prefix:'@', maxlength: '@' , model:'=ngModel'},
			template:	'<div ng-class="{\'input-group\':group}">'+
								'<span class="input-group-addon" data-ng-if="prefix">{{prefix}}</span>'+
								'<input class="form-control" id="field_{{id}}" type="text" data-ng-model="model" placeholder="{{placeholder}}" maxlength="{{maxlength}}"/>'+
						'</div>',
			link: function (scope,elem,attrs){

				if (scope.prefix)
					scope.group = true;
			}
		};
	})

	.directive('hTextArea',function(){
		return {
			restrict: 'E',
			transclude: false,
			scope: { id: '@', label: '@' , width: '@' , type: '@', model:'=ngModel'},
			template:	'<textarea class="form-control" rows="{{rows ? rows : 5}}" id="{{id}}" data-ng-model="model">{{value}}</textarea>'
		};
	})

	.directive('hCheckbutton',function($http){
		return {
			restrict: 	'E',
			transclude: false,
			scope: 		{id: '@', label: '@', width: '@', model:'=ngModel', options: '=', valorInicial:"="},
			template:	'<h-line id="{{id}}" label="{{label}}" width="{{width}}">'+
							'<div class="btn-group">'+
								'<label data-ng-repeat="item in options" class="btn {{class ? class : \'btn-primary\'}}" data-ng-class="{active:model.texto==item.texto}" data-ng-click="selecionar(item)" ng-model="model" style="text-transform:none;">{{item.texto}}</label>'+
							'</div>'+
						'</h-line>',
			link: function(scope,elem,attrs){

				scope.$watch("options",function(oldValue,newValue){
					try {
						var vI = parseInt(scope.valorInicial);
						scope.model = (isNaN(vI)) ? {} : oldValue[vI];
					} catch (e) { /***/ }
				});

				scope.selecionar = function(item){
					scope.model = item;
				}
			}
		}
	})

	.directive('hSelect',function($http){
		return {
			restrict: 'E',
			transclude: false,
			scope: {id: '@', label: '@', width: '@', model:'=ngModel', options: '=', valorInicial:"="},
			templateUrl: "/admin/spa/templates/htmlDirectives/selectBox.html",
			link: function(scope,elem,attrs){

				scope.$watch("options",function(oldValue,newValue){
					try {
						var vI = parseInt(scope.valorInicial);
						scope.model = (isNaN(vI)) ? {} : oldValue[vI];
					} catch (e) { /***/ }
				});

				scope.selecionaItem = function(item){
					scope.model = item;
				};
			}
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
				};

				scope.cores = {};
				ColorPalette.get().then(function(response){
					for (var i in response.data){
						var e = response.data[i];
						scope.cores[e.cor] = e.texto;
					}
					scope.listaCores = response.data;
					scope.model = scope.listaCores[0];
				});

				// recupera a cor quando for selecionado um item para alteração
				scope.$watch("model",function(oldV,newV){
					scope.model.texto = scope.cores[scope.model.cor];
				});
			}
		};
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


	};
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
			};

			$http({
				url: "spa/resources/data/fontawesome.json",
				method: "GET"
			}).then(function(response){
				scope.listaIcones = (response.data);
			});
		}
	};
})

.directive('modal', function(){
	return{
		restrict: 'E',
		transclude: true,
		scope: {id: '@', title: '@', width: '@', icons: '=' },
		templateUrl: "spa/templates/htmlDirectives/modal.html"
	};
});

})();
