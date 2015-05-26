onlineShopper.factory('productFile', function($http){
  return {
    get: function() {
      return $http.get('../data/productList.json')
    }
  };
});

