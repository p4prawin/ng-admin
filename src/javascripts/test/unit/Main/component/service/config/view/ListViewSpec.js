/*global describe,module,beforeEach,inject,it,expect*/
var ListView = require('../../../../../../../ng-admin/es6/lib/View/ListView'),
    DataStore = require('../../../../../../../ng-admin/es6/lib/DataStore/DataStore'),
    Entity = require('../../../../../../../ng-admin/es6/lib/Entity/Entity'),
    Field = require('../../../../../../../ng-admin/es6/lib/Field/Field');

var dataStore = new DataStore();

describe("Service: ListView config", function () {
    describe('listActions()', function () {
        it('should return the view', function () {
            var view = new ListView();
            expect(view.listActions(['edit'])).toBe(view);
        });

        it('should store the listActions for the Datagrid', function () {
            var view = new ListView();
            expect(view.listActions(['edit']).listActions()).toEqual(['edit']);
        });
    });

    describe('map()', function () {
        it('should apply the function argument to all list values', function () {
            var list = new ListView('allCats');
            list
                .setEntity(new Entity('cats').identifier(new Field('id')))
                .addField(new Field('name').map(function (value) {
                    return value.substr(0, 5) + '...';
                }));

            var entries = dataStore.mapEntries(list.entity.name(), list.identifier(), list.getFields(), [
                { id: 1, human_id: 1, name: 'Suna'},
                { id: 2, human_id: 2, name: 'Boby'},
                { id: 3, human_id: 1, name: 'Mizute'}
            ]);

            expect(entries[0].values.id).toEqual(1);
            expect(entries[0].values.name).toEqual('Suna...');
            expect(entries[2].values.id).toEqual(3);
            expect(entries[2].values.name).toEqual('Mizut...');
        });
    });

});
