onlineShopper.controller('OnlineShopperController', ['$scope', 'productData', function($scope, productFile){

  productFile.dataLoad(function(productFile){
    $scope.productFile = productFile;
  });


  //[
  // {
  // ProductName: "Almond Toe Court Shoes, Patent Black",
  // Category: "Womens Footwear",
  // Price: 99.00,
  // QuantityInStock: 5
  // }
  // ]

}]);