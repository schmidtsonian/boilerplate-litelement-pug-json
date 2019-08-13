#!/bin/bash

source bin/vars/variables.sh

echo "Deploying site..."
# rsync -azq --partial --delete www/html/ $DEV_USER@$DEV_IP:applications/$DEV_DB/public_html/calm/
