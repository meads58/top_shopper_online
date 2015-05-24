describe('Viewing products at TopShoppers Online', function() {
  it("I can view the product 'Blue Sude Shoes' and its category, price and availability information", function() {
    browser.get('http://localhost:8081');
    var products = element.all(by.repeater('product in productList'))

    expect(products.first).toEqual('Suede Shoes, Blue')
  });
});
