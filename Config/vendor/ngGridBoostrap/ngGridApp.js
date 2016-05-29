(function(angular) {
  var ngGridModule = angular.module('ngGrid', []); 
  
  // the skip filter
  ngGridModule.filter('skip', function() {
      return function(array, skipAt) {
          return !array || array.slice(skipAt);
      };
  });
  
  ngGridModule.filter('eval', function() {
      return function(expression) {
          return this.$eval(expression);
      };
  });

  ngGridModule.filter('length', function() {
      return function(list) {
          return !list || list.length;
      };
  });

  ngGridModule.filter('lastPage', function() {
      return function(list, limit) {
          return !list || Math.ceil(list.length / limit);
      };
  });
  
  ngGridModule.filter('equal', function() {
      return function(a, b, klass) {
          return a === b ? klass : '';
      };
  });
  
  ngGridModule.filter('toPages', function() {
      return function(length) {
          if(!length) return [];
          return new Array(length);
      };
  });
  
  // the row filter
  ngGridModule.filter('rowFilter', function() {
    return function(items, row, term) {

      console.log("items",items);
      console.log("row",row);
      console.log("term",term);

      if (items === undefined) {
        return;         
      }
      var arrayToReturn = [];
      for (var i=0; i<items.length; i++) {
        if (items[i][row] == term) {
          arrayToReturn.push(items[i]);
        }        
      }
      return arrayToReturn;    
    };
  });

  // the main directive: ngGrid
  ngGridModule.directive('ngGrid',  function($compile, $filter) {
    return {
      compile: function compile(element, attrs) {
            
        var 
                index = 0,
                tr = element.children('tbody').children('tr'),
                sourceExpression     = tr.attr('ng-repeat').match(/^\s*(.+)\s+in\s+(.*)\s*$/),
                baseExpression = sourceExpression[2],
                itemExpression = sourceExpression[1];
                    
        tr.attr('ng-repeat', itemExpression + ' in ngGridSortPagination.expression | eval | skip:ngGridSortPagination.skipAt | orderBy:ngGridSortPagination.predicate:ngGridSortPagination.reverse | limitTo:ngGridSortPagination.limit');
            
        var header = [],
        filter_hash = {};
            
        angular.forEach(tr.children('td'), function(elm) {
            var column = angular.element(elm),
                exp = column.html().replace(/[{}\s]/g, ""),
                name = exp.split(/\.(.+)?/)[1].split(/\|/)[0],
                filter = exp.split(/\.(.+)?/)[1].split(/\|/)[1],
                filterAttrib = (!filter) ? "" : ' filter="' + filter + '"',
                title = column.attr('title') || name;

            // build up a list of all header elements
            header.push({
              name: name,
              title: title,
              index: index
            });
                
            if(name) {
              filter_hash[name.toLowerCase()] = index;
              filter_hash[name] = index;
            }

            column.attr('title', null);
            index ++;
        });
        element.prepend('<thead>' +
          '<th ng-repeat="head in ngGridSortPagination.header" ng-click="sort(head.index)">' +
            '<i ng-class="{\'icon-arrow-up\': ngGridSortPagination.predicate==head.name && ngGridSortPagination.reverse, \'icon-arrow-down\': ngGridSortPagination.predicate==head.name && !ngGridSortPagination.reverse}" ></i>' +
            '<a>{{head.title}}</a>' +
          '</th>' +
        '</thead>');

        return {
            pre: function preLink(scope, linkElement) {
                var ngGridSortPagination = {
                  expression: baseExpression,
                  limit     : 15,
                  page      : 1,
                  skipAt    : 15, // muss noch umgestellt werden
                  header    : header
                  
                  
                },
                listExpression = baseExpression;
                scope.ngGridSortPagination  = ngGridSortPagination;

                scope.$watch('ngGridSortPagination.filter', function() {
                  if (ngGridSortPagination.filter) {
                    var filterExpression;

                    if(angular.lowercase(ngGridSortPagination.filter).indexOf(":") !== -1) {
                      var query = ngGridSortPagination.filter.split(":"),
                          row = query[0].replace(" ", "_"),
                          filter = query[1];

                          console.log("query",query);
                          console.log("row",row);
                          console.log("filter",filter);
                          console.log("filter_hash",filter_hash);

                      if (row in filter_hash) {  											
                        var head = ngGridSortPagination.header[filter_hash[row]];
                        if (filter) {
                          filterExpression = '| rowFilter:' + head.name + ':' + filter;
                          console.log(filterExpression);
                         }
                         baseExpression = baseExpression + filterExpression;
                         console.log("baseExpression",baseExpression);
                      }                          
                    }  else {
                      console.log('any filter');
                    }
                  }
                });
    
                // var pageSize = 
                //     '<select ng-model="ngGridSortPagination.limit">' +
                //       '<option  value="15" selected="selected">15</option>' +
                //       '<option  value="30">30</option>' +
                //       '<option  value="60">60</option>' +
                //     '</select>';
                // element.before($compile(pageSize)(scope));

							var filter =                                               
								'<input style="float:right; width: 200px" ng-model="ngGridSortPagination.filter" placeholder="Filter..." name="filter" />';
							element.before($compile(filter)(scope));
							
							// var debugOutput =                     
							// 	'<pre>header = {{header | json}}</pre>' +
							// 	'<pre>pagination = {{ngGridSortPagination | json}}</pre>';
							// element.after($compile(debugOutput)(scope));
							
							var footer =
								'<div style="float: left; padding-top: 10px;">' +
									'<strong>Total items: {{ngGridSortPagination.expression | eval | length}}</strong>' +
								'</div>' +
								'<div class="pagination pagination-right">' +
									'<ul>' +
										'<li ng-class="ngGridSortPagination.page | equal:1:\'disabled\'">' +
											'<a ng-click="prev()">Prev</a>' +
										'</li>' +
										'<li ng-repeat="index in ngGridSortPagination.expression | eval | lastPage:ngGridSortPagination.limit | toPages" ng-class="{active: ngGridSortPagination.page==index}">' +
											'<a ng-click="page($index + 1)">{{$index + 1}}</a></li>' +
										'</li>' +
                    '<li ng-class="ngGridSortPagination.page | equal:1:\'disabled\'">' +
                      '<a ng-click="next()">Next</a>' +
										'</li>' +
									'</ul>' +
								'</div>';                      
                element.after($compile(footer)(scope));
                    
                scope.sort = function(index) {
                  var head = header[index];
                  // if the grid is already sorted by this head and not in reverse mode:
                  ngGridSortPagination.reverse = (ngGridSortPagination.predicate === head.name) && ! ngGridSortPagination.reverse;
                  // set sorting to this head
                  ngGridSortPagination.predicate = head.name;
                };
                    
                scope.prev = function() {
                    scope.page(ngGridSortPagination.page - 1);
                };
                    
                scope.next = function() {
                    scope.page(ngGridSortPagination.page + 1);
                };
                    
                scope.page = function(index) {
                    ngGridSortPagination.page = index;
                    ngGridSortPagination.skipAt = ((ngGridSortPagination.page - 1) * ngGridSortPagination.limit);
                };

                scope.page(1);
   
            }
        };
      }
    };
});
})(window.angular);
