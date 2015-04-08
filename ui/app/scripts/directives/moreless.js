var app = angular.module('moreLess',[]);

app.directive('moreLess', function() {
    'use strict';
    return {
        restrict: 'E',
        replace: true,
        scope: {
            items: '='
        },
        link: function(scope) {
            scope.maxItems = 5;
            scope.itemLimit = scope.maxItems;
            scope.moreLabel = 'more';
            
            scope.toggleMore = function() {
                if (scope.itemLimit < scope.items.length) {
                    scope.moreLabel = 'less';
                    scope.itemLimit = scope.items.length;
                } else {
                    scope.moreLabel = 'more';
                    scope.itemLimit = scope.maxItems;
                }
            };
        },
        /*jshint multistr: true */
        template: '<ul>\
        <li ng-repeat="item in items | limitTo:itemLimit track by $index">{{ item }}</li>\
        <li ng-show="items.length > maxItems"><a ng-click="toggleMore()">{{ moreLabel }}</a></li>\
    </ul>'
    };
});
