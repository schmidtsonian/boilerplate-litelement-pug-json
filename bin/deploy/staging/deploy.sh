#!/bin/bash

source bin/vars/variables.sh

echo "Deploying site..."
# rsync -azq --partial --delete www/html/ $STG_USER@$STG_IP:applications/$STG_DB/public_html/calm/
