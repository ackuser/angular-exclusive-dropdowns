app = angular.module('BrandsApp', []);

app.controller("BrandsCtrl", function($scope) {


  $scope.columnList = [
    'Square','Stripe','Paypal','Apple Pay','Google Wallet','Braintree','Android Pay','Samsung Pay','Amazon Payments','World Pay','Authorize Net','Venmo','Xoom','Paydiant'
  ];

  $scope.itemFullList = '';

  $scope.brand1 = 'Paypal';
  $scope.brand2 = 'Braintree';
  $scope.brand3 = 'Amazon Payments';



  $scope.updateBrand = function ($event, num_brand ,name)
  {
    switch(num_brand) {
        case 1:
            $scope.brand1 = name;
            break;
        case 2:
            $scope.brand2 = name;
            break;
        case 3:
            $scope.brand3 = name;
            break;
    }
    //$event.stopPropagation();
  }

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
