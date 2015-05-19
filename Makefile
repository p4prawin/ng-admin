.PHONY: build

watch:
	@./node_modules/webpack-dev-server/bin/webpack-dev-server.js --progress --colors --host=0.0.0.0

install:
	bower install
	npm install
	./node_modules/protractor/bin/webdriver-manager update

run:
	@grunt

build-dev:
	@./node_modules/webpack/bin/webpack.js --progress
	@echo "Files build/ng-admin.min.css and build/ng-admin.min.js updated (no minification)"

build:
	@NODE_ENV=production ./node_modules/webpack/bin/webpack.js -p --progress
	@echo "Files build/ng-admin.min.css and build/ng-admin.min.js updated (with minification)"
	@cp build/ng-admin* examples/blog/build
	@echo "Demo updated!"

test:
	@grunt test:local
