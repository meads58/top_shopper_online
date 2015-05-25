describe('factory: productFile', function() {
  var factory;

  beforeEach(module('OnlineShopper'));

  beforeEach(inject(function(productFile) {
    factory = productFile;
  }));

  it('responds to get', function() {
    expect(factory.get).toBeDefined();
  });

  it('returns search results', function() {
    factory.get()
    .then(function(response) {
      expect(response.data.productList[0]).toEqual('items')
    })
  });

});



