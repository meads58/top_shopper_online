onlineShopper.factory('productFile', ['$q','$http', function($q, $http) {
  return {
    dataLoad: function(callback) {
      $http.get('data/productList.json').success(callback);
    }
  };
}]);