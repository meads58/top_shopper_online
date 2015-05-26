describe('Viewing products at TopShoppers Online', function() {

  beforeEach(function() {
    browser.get('http://localhost:8081/');
    shoppingCart = element.all(by.repeater('shopping in shoppingCart'));
    voucherField = element(by.id('voucher'));
    voucherSubmit = element(by.id('submit_voucher'));
  })

  it('A user can add blue suede shoes to their shopping cart', function() {
    element(by.id('select_prod_ckbox_1')).click();
    expect(element(by.binding('shopping.ProductName')).getText()).toEqual('Suede Shoes, Blue');
    expect(shoppingCart.count()).toBe(1);
  });

  it('A user can remove red flip flops from the shopping cart', function() {
    element(by.id('select_prod_ckbox_3')).click();
    expect(shoppingCart.count()).toBe(1);
    element(by.id('select_prod_ckbox_3')).click();
    expect(shoppingCart.count()).toBe(0);
  });

  it('Can show me the total price for my purchase of a Gold Button Cardigan and Bird Print Dress as £437', function() {
    element(by.id('select_prod_ckbox_5')).click();
    element(by.id('select_prod_ckbox_11')).click();
    expect(element(by.css('.totalAmount')).getText()).toEqual('Total Price 437.00');
  });

  it("Can take a £5 off voucher for any purchase with code '5iverOff' ", function() {
    element(by.id('select_prod_ckbox_5')).click();
    expect(element(by.css('.totalAmount')).getText()).toEqual('Total Price 167.00');
    voucherField.sendKeys('5iverOff');
    voucherSubmit.click();
    expect(element(by.css('.totalAmount')).getText()).toEqual('Total Price 162.00');
  });

  it("Can take a £10 off voucher for a purchase over £50 with code '10erOff' ", function() {
    element(by.id('select_prod_ckbox_5')).click();
    expect(element(by.css('.totalAmount')).getText()).toEqual('Total Price 167.00');
    voucherField.sendKeys('10erOff');
    voucherSubmit.click();
    expect(element(by.css('.totalAmount')).getText()).toEqual('Total Price 157.00');
  });

 it("Will not take the £10 off voucher if a purchase is under £50 with code '10erOff' ", function() {
    element(by.id('select_prod_ckbox_1')).click();
    expect(element(by.css('.totalAmount')).getText()).toEqual('Total Price 42.00');
    voucherField.sendKeys('10erOff');
    voucherSubmit.click();
    expect(element(by.css('.totalAmount')).getText()).toEqual('Total Price 42.00');
  });

  it("Can take a £15 off voucher for a purchase over £75 and includes shoes with code '15Feet' ", function() {
    element(by.id('select_prod_ckbox_0')).click();
    element(by.id('select_prod_ckbox_5')).click();
    expect(element(by.css('.totalAmount')).getText()).toEqual('Total Price 266.00');
    voucherField.sendKeys('15Feet');
    voucherSubmit.click();
    expect(element(by.css('.totalAmount')).getText()).toEqual('Total Price 251.00');
  });

  it("Will not take a £15 off voucher for a purchase over £75 that does not include shoes in the shopping cart with code '15Feet' ", function() {
    element(by.id('select_prod_ckbox_8')).click();
    element(by.id('select_prod_ckbox_5')).click();
    expect(element(by.css('.totalAmount')).getText()).toEqual('Total Price 206.99');
    voucherField.sendKeys('15Feet');
    voucherSubmit.click();
    expect(element(by.css('.totalAmount')).getText()).toEqual('Total Price 206.99');
  });

  it("Will display a the message 'Invalid Code' if the entered voucher code is not a valid one.", function() {
    voucherField.sendKeys('testing');
    voucherSubmit.click();
    expect(voucherField.getText()).toEqual('Invalid Code')
  })

});
