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
  && bundle exec htmlproofer ./_site \
    --check-html \
    --disable-external \
  && echo \
  && echo 'Running acceptance tests...' \
  && node tests/js/conf/local.runner.js -c tests/js/conf/local.conf.js"
