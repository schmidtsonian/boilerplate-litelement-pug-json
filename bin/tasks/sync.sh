#!/bin/bash

source bin/vars/variables.sh

docker exec -it $PUG_CONTAINER bash -c "\
  find . -maxdepth 1 -type d \
    -not -name . \
    -not -name .. \
    -not -name node_modules \
    -exec rm -r {} + \
  && find . -maxdepth 1 -type f -delete"

docker cp www $PUG_CONTAINER:/var/
