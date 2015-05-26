describe('OnlineShopperController', function() {
  beforeEach(module('OnlineShopper'));

  var scope, ctrl;
  var fiverOffVoucher = '5iverOff'
  var tenOffVoucher = '10erOff'
  var fifteenOffVoucher = '15Feet'

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('OnlineShopperController', {$scope: scope});
  }));

  describe('shopping cart total', function() {
    it("calculates the total using the 'Price' key value pair from the shopping cart array", function() {
      scope.shoppingCart = [{QuantityInStock: 10, Price: 2}, {QuantityInStock: 11, Price:3.5}]
      expect(scope.calculateTotal()).toEqual(5.5)
    });
  });

  describe('stock levels', function() {
    it('knows when the stock level is 0 and returns true.', function(){
      expect(scope.outOfStock({QuantityInStock: 0 })).toBe(true);
    });

    it('knows when the stock level is 0 and returns true.', function(){
      expect(scope.outOfStock({QuantityInStock: 1 })).toBe(false);
    });

    it('sends an alert when out of stock', function() {
      expect(scope.stockAlert({QuantityInStock: 0 })).toEqual('out of stock');
    });

    it('does not send any alert if there is 1 or more items', function() {
      expect(scope.stockAlert({QuantityInStock: 1 })).toBeUndefined;
    });
  });

  describe('voucher codes', function() {
    it("changes the text field to 'Invalid Code' when the voucher code is wrong", function() {
      scope.text = 'wrong code';
      scope.submit();
      expect(scope.text).toEqual('Invalid Code');
    });

    it('knows to take £5 off the total', function() {
      scope.fiveOff();
      expect(scope.discount).toEqual(5);
    });

    it('knows to take £10 off the total when the cart is over £50', function() {
      scope.total = 51
      scope.tenOff();
      expect(scope.discount).toEqual(10);
    });

    it('knows not to take £10 off the total when the cart is under £50', function() {
      scope.total = 49
      scope.tenOff();
      expect(scope.discount).toEqual(0);
    });

    it('knows when the right £15 off voucher code is entered', function() {
      scope.text = fifteenOffVoucher
    });
  });
});