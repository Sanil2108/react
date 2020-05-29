#!/bin/sh
yarn build
ACCESS_KEY=$(cat mainInstanceRootKey.csv | grep -P "AWSAccessKeyId=[A-Za-z0-9]+" | cut -d "=" -f2)
SECRET_KEY=$(cat mainInstanceRootKey.csv | grep -P "AWSSecretKey=[A-Za-z0-9]+" | cut -d "=" -f2)
aws s3 sync build/* s3://react-newsapp
