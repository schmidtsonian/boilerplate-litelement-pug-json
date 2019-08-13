#!/bin/bash

source bin/vars/variables.sh

docker exec -it $PUG_CONTAINER bash -c "\
  echo 'Checking for vulnerabilities...' \
  && retire -n -p \
  && echo \
  && echo 'Validating JavaScript...' \
  && gulp scriptsLint \
  && echo \
  && echo 'Running JavaScript unit tests...' \
  && npm test \
  && echo \
  && echo 'Validating html...' \
  && htmlproofer ./html \
    --check-html \
    --url-ignore '/#.*/' \
    --disable-external"
