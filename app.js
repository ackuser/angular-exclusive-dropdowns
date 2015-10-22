app = angular.module('SelectApp', []);

app.controller("SelectCtrl", function() {
    var vm = this;

    vm.columnList = ['red', 'orange', 'yellow', 'green',
                     'blue', 'indigo', 'violet'];

    vm.itemFullList = '';

    vm.select1 = '';
    vm.select2 = '';
    vm.select3 = '';
});

app.filter('excludeUsed', function() {
    var filter = function(items, excludeVal1, excludeVal2) {
        var checkItem = function(item) {
            return (item != excludeVal1) && (item != excludeVal2);
        };

        return items.filter(checkItem);
    };

    return filter;
});
