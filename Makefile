default: build

build:
	rm -f uml-anywhere.zip
	zip uml-anywhere.zip -r ./* -x .git/* *.DS_Store Makefile README.md
