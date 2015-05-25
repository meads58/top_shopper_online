##Deloitte Digital Development Test

##Technology used
* node.js
* express.js
* Angular.js
* HTML, CSS, bootstrap
* Protractor(integration testing)
* Karma(unit testing)

##Set up
* Make sure node.js is installed with 'node -v'
* Make sure bower is installed with 'bower -v'
* bower install
* npm install
* webdriver-manager update
* You need to run 'http-server ./' then go to the localhost address it is running on to demo the application and to run the end to end tests.

**Running the tests**
* webdriver-manager start
* 'protractor test/e2e/conf.js' to run the end2end tests.
* 'karma start test/karma.conf.js' to run the unit tests.
**Voucher Codes**
* £5 off with '5iverOff'
* £10 off for purchase over £50 with '10erOff'
* £15 off for purchases over £75 and includes footwear in the shopping cart with '15Feet'

##Approach
I've been advised to use javascript for this tech test so I choose the Angular.js framework for the front-end because I've used it successfully before. Having databinding will be good for populating the shopping cart, the framework allows you to split out the MVC components and the testing tools are good.

##Design
* Store product details in a file then used a service to pull them in.
* A checkbox model was used to select products for the shopping cart.

##Issues
* Karma unit testing had configuration issues so I focused on the end2end testing for test coverage.
* The last integration test to check invalid vouchers isn't passing but the functionality is working correctly. I need to investigate how to get the text out of the text field for this test to pass.



