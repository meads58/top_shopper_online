onlineShopper.controller('OnlineShopperController', ['$scope','productFile', function($scope,productFile){

  $scope.shoppingCart = [];

  $scope.qty = 1

  $scope.addItems = function() {
    $scope.qty++;
  };

   $scope.removeItems = function() {
    $scope.qty--;
  };

  $scope.checkAvailableQty = function(product) {

  }

  $scope.calculateTotal = function() {
    var total = 0.00;
    total = $scope.shoppingCart.reduce(function (a, b) { return a + b.Price; }, 0);
    return total
  }

  productFile.get().then(function (products) {
    $scope.products = products.data.productList;
  });

}]);