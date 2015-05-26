describe('OnlineShopperController', function() {
  beforeEach(module('OnlineShopper'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('OnlineShopperController', {$scope: scope});
  }));

  it("calculates the total using the 'Price' key value pair from the shopping cart array", function() {
    scope.shoppingCart = [{QuantityInStock: 10, Price: 2}, {QuantityInStock: 11, Price:3.5}]
    expect(scope.calculateTotal()).toEqual(5.5)
  });

  it('knows when the stock level is 0 and returns true.', function(){
    expect(scope.outOfStock({QuantityInStock: 0 })).toBe(true);
  });

  it('knows when the stock level is 0 and returns true.', function(){
    expect(scope.outOfStock({QuantityInStock: 1 })).toBe(false);
  });

  it('sends an alert when out of stock', function() {
    expect(scope.stockAlert({QuantityInStock: 0 })).toEqual('out of stock');
  })

  it('does not send any alert if there is 1 or more items', function() {
    expect(scope.stockAlert({QuantityInStock: 1 })).toBeUndefined;
  })



});