describe('OnlineShopperController', function() {
  beforeEach(module('OnlineShopper'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('OnlineShopperController', {$scope: scope});
  }));

  it('calculates the total price', function() {

  });

  it('knows when the stock level is 0 and returns true.', function(){
    expect(scope.outOfStock({QuantityInStock: 0 })).toBe(true);
  });

  it('knows when the stock level is 0 and returns true.', function(){
    expect(scope.outOfStock({QuantityInStock: 1 })).toBe(false);
  })
});