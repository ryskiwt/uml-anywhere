default: build

build:
	rm uml-anywhere.zip
	zip uml-anywhere.zip -r ./* -x .git/* *.DS_Store
