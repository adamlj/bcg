#!/bin/bash
cd src
if [ "$IS_PRODUCTION" = "true" ]; then
  yarn build
  yarn start
else
  yarn dev
fi


