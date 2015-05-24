onlineShopper.controller('OnlineShopperController', ['$scope','productFile', function($scope,productFile){

  productFile.get().then(function (products) {
    $scope.products = products.data.productList;
  });

}]);