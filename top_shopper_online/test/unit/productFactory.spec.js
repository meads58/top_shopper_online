describe('factory: productFile', function() {
  var factory;

  beforeEach(module('OnlineShopper'));

  beforeEach(inject(function(productFile) {
    factory = productFile;
  }));

  it('responds to get', function() {
    expect(factory.get).toBeDefined();
  });

});



