describe('OnlineShopperController', function() {
  beforeEach(module('OnlineShopper'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('OnlineShopperController');
  }));

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });
});