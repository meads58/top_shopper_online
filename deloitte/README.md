##Deloitte Digital Development Test

##Technology used
*node.js
*express.js
*Angular.js
*HTML, CSS, bootstrap
*Protractor(integration testing)
*Karma(unit testing)

##Set up
*Make sure node.js is installed with 'node -v'
*Make sure bower is installed with 'bower -v'
*bower install
*npm install
*webdriver-manager update
###To run the tests
*webdriver-manager start
*protractor test/e2e/conf.js

##Approach
I've been advised to use javascript for this tech test so I choose the Angular.js framework for the front-end because I've used is successfully before, the directives will be good for filtering the products, the framework allows you to split out the MVC components and the testing tools are pretty good.

Design
*Store product details in a file then use a service to pull them in.
*




mkdir'deloitte' and go into it
git init
check node and bower versions
bower init
install necessary packages
bower install jquery --save
bower install bootstrap --save
bower install angular --save
bower install angular-resource --save
npm init
.gitignore and add in the node and bower files.
npm install karma --save-dev
npm install karma-jasmine karma-chrome-launcher karma-phantomjs-launcher --save-dev
npm install -g karma-cli
create karma.conf.js