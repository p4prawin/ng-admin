.PHONY: build

install:
	bower install
	npm install
	./node_modules/protractor/bin/webdriver-manager update

run:
	@grunt

build:
	@NODE_ENV=production ./node_modules/webpack/bin/webpack.js -p --progress
	@cp -Rf build/* examples/blog/build/
	@echo "Files build/ng-admin.min.css and build/ng-admin.min.js updated (with minification)"

test:
	@grunt test:local
