/*global define*/

define(function (require) {
    'use strict';

    var datagridView = require('./Datagrid.html'),
        DatagridController = require('./DatagridController');

    function maDatagridDirective() {
        return {
            restrict: 'E',
            template: datagridView,
            scope: {
                name: '@',
                entries: '=',
                selection: '=',
                fields: '&',
                listActions: '&',
                entity: '&',
                sortField: '=',
                sortDir: '='
            },
            controllerAs: 'datagrid',
            controller: DatagridController
        };
    }

    maDatagridDirective.$inject = [];

    return maDatagridDirective;
});
