#!/bin/bash

source bin/vars/variables.sh

docker exec -it $PUG_CONTAINER bash -c "source ~/.bashrc \
  && echo \
  && echo 'Watching for changes...' \
  && echo \
  && npm run watch"
