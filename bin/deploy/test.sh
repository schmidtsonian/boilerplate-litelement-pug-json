#!/bin/bash

cd www

echo "Checking for vulnerabilities..."
npx retire -n -p
echo
echo "Validating html..."
htmlproofer ./html \
  --check-html \
  --url-ignore '/#.*/' \
  --disable-external
