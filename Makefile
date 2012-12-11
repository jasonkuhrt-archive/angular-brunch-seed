all:
	./node_modules/.bin/brunch watch --server --port 9898

build:
	./node_modules/.bin/brunch build

tests:
	./node_modules/.bin/testacular start
