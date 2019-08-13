THIS_FILE := $(lastword $(MAKEFILE_LIST))

all: help

coffee:
	@echo "☕  Making some coffee! ☕"
	@$(MAKE) -f $(THIS_FILE) start
	@$(MAKE) -f $(THIS_FILE) deps
	@$(MAKE) -f $(THIS_FILE) build
	@echo "☕  Coffee is done! ☕"

start:
	@bin/tasks/start.sh

deps:
	@bin/tasks/deps.sh

build:
	@bin/tasks/build.sh

watch:
	@bin/tasks/watch.sh

bw:
	@$(MAKE) -f $(THIS_FILE) build
	@$(MAKE) -f $(THIS_FILE) watch

ssh:
	@bin/tasks/ssh.sh

rebuild:
	@bin/tasks/rebuild.sh

stop:
	@bin/tasks/stop.sh

restart:
	@bin/tasks/restart.sh

clean:
	@bin/tasks/clean.sh

templates:
	@bin/tasks/templates.sh

jsons:
	@bin/tasks/jsons.sh

scripts:
	@bin/tasks/scripts.sh

help:
	@echo "Welcome to Estebanco LitElement Pug+TypeScript+JSONS!"
	@echo "	make coffee"
	@echo "		- Run start, install, deps, and build"
	@echo "	make start"
	@echo "		- Start the containers"
	@echo "	make deps"
	@echo "		- Install npm and bower dependencies"
	@echo "	make build"
	@echo "		- Build the site for production"
	@echo "	make watch"
	@echo "		- Build and serve the site on port 3000 and watch for changes"
	@echo "	make bw"
	@echo "		- Build, Watch"
	@echo "	make ssh"
	@echo "		- SSH into the container"
	@echo "	make rebuild"
	@echo "		- Rebuild and restart the container"
	@echo "	make stop"
	@echo "		- Stop the container"
	@echo "	make restart"
	@echo "		- Restart the container"
	@echo "	make clean"
	@echo "		- Docker garbage collection"
	@echo "	make templates"
	@echo "		- Merge JSONS files and build pugs templates"
	@echo "	make jsons"
	@echo "		- Merge JSONS files"
	@echo "	make scripts"
	@echo "		- Merge scripts files"

.PHONY: coffee start deps build watch bw ssh rebuild stop restart clean templates jsons scripts
