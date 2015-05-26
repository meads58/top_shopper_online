onlineShopper.controller('OnlineShopperController', ['$scope','productFile', function($scope,productFile){
  $scope.discount = 0
  $scope.total = 0.00;
  $scope.text = ''
  $scope.shoppingCart = [];

  $scope.outOfStock = function(product) {
    if (product.QuantityInStock == 0) {
      return true
    }else{
      return false
    };
  };

  $scope.stockAlert = function(product){
    if ($scope.outOfStock(product) == true) {
      return 'out of stock'
    };
  };

  $scope.calculateTotal = function() {
    $scope.total = $scope.shoppingCart.reduce(function (a, b) { return a + b.Price; }, 0);
    $scope.total = $scope.total - $scope.discount
    return $scope.total
  }

  $scope.submit = function() {
    switch($scope.text) {
      case '5iverOff' :
        $scope.fiveOff();
        break;
      case '10erOff' :
        $scope.tenOff();
        break;
      case '15Feet' :
        $scope.fifteenOff();
        break;
      default:
        $scope.text = 'Invalid Code'
    }
    $scope.calculateTotal
  };

  $scope.fiveOff = function() {
    $scope.discount = 5
    $scope.calculateTotal()
  };

  $scope.tenOff = function() {
    if ($scope.total > 50){
      $scope.discount = 10
      $scope.calculateTotal()
    }
  }

  fifteenOff = function() {
    for(i = 0; i < $scope.shoppingCart.length; i++) {
      categoryCheck = checkForFootwear($scope.shoppingCart[i]["Category"])
      if ( categoryCheck === true && $scope.total > 75){
        $scope.discount = 15
      };
    };
    $scope.calculateTotal
  }

  checkForFootwear = function(category) {
    if ( category.search("Footwear") > -1){
      return true
    };
  }

  productFile.get().then(function (products) {
    $scope.products = products.data.productList;
  });

}]);