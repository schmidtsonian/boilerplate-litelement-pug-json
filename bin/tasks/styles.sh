#!/bin/bash

source bin/vars/variables.sh

docker exec -it $PUG_CONTAINER gulp styles
