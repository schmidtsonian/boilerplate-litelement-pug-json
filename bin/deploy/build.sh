#!/bin/bash

docker exec -it $PUG_CONTAINER bash -c "source ~/.bashrc \
  && echo \
  && echo 'Building the project...' \
  && echo \
  && gulp"

