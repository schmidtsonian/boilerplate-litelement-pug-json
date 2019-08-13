#!/bin/bash

source bin/vars/variables.sh

echo "Deploying site..."
# rsync -azq --partial --delete www/html/ $PROD_USER@$PROD_IP:applications/$PROD_DB/public_html/calm/
