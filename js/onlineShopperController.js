onlineShopper.controller('OnlineShopperController', ['$scope','productFile', function($scope,productFile){
  var discount = 0
  var total = 0.00;
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
    total = $scope.shoppingCart.reduce(function (a, b) { return a + b.Price; }, 0);
    total = total - discount
    return total
  }

  $scope.submit = function() {
    switch($scope.text) {
      case '5iverOff' :
        fiveOff();
        break;
      case '10erOff' :
        tenOff();
        break;
      case '15Feet' :
        fifteenOff();
        break;
      default:
        $scope.text = 'Invalid Code'
    }
    $scope.calculateTotal
  };

  fiveOff = function() {
    discount = 5
    $scope.calculateTotal()
  };

  tenOff = function() {
    if (total > 50){
      discount = 10
      $scope.calculateTotal()
    }
  }

  fifteenOff = function() {
    for(i = 0; i < $scope.shoppingCart.length; i++) {
      categoryCheck = checkForFootwear($scope.shoppingCart[i]["Category"])
      if ( categoryCheck === true && total > 75){
        discount = 15
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