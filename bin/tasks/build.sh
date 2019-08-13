#!/bin/bash

source bin/vars/variables.sh

docker exec -it $PUG_CONTAINER bash -c "source ~/.bashrc \
  && echo \
  && echo 'Building the project...' \
  && echo \
  && npm run start"
