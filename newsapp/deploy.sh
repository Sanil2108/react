#!/bin/sh
# For deployment on S3
yarn build
ACCESS_KEY=$(cat ~/Documents/aws/mainInstanceRootKey.csv | grep -P "AWSAccessKeyId=[A-Za-z0-9]+" | cut -d "=" -f2)
SECRET_KEY=$(cat ~/Documents/aws/mainInstanceRootKey.csv | grep -P "AWSSecretKey=[A-Za-z0-9]+" | cut -d "=" -f2)
aws s3 sync ./build s3://react-newsapp

# For deployment on EC2
# yarn build
# # TODO: Some sed/awk command here to replace static with react-newsapp/static
# scp -r -i ~/Documents/aws/main-instance.pem build/* ubuntu@3.7.175.185:~/react-newsapp/

echo "Deployed to http://react-newsapp.s3-website.ap-south-1.amazonaws.com"
chromium http://react-newsapp.s3-website.ap-south-1.amazonaws.com