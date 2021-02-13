# donut.akki.ca

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/akki-io/vote-donut)

A demo voting app using the AWS Amplify Framework and Vue.js

![Screenshot](https://raw.githubusercontent.com/akki-io/vote-donut/master/public/vote-donut-image.png "Screenshot")

AWS Amplify Framework is a powerful framework and is the fastest, easiest way to develop mobile and web apps that scale. This app is completely serverless. 

# Stack
- Frontend - VueJs
- Serverless API - AWS AppSync GraphQL API
- Serverless Database - AWS DynamoDB

# Prerequisites

Before we begin, make sure you have the following installed:
- [Node.js](https://nodejs.org/) v10.x or later
- [npm](https://www.npmjs.com/) v5.x or later
- [git](https://git-scm.com/) v2.14.1 or later
- [AWS Account](https://aws.amazon.com/)

# Setup
Follow the instruction here to set up AWS account and Amplify CLI.
https://docs.amplify.aws/start/getting-started/installation/q/integration/vue

# Installation
- Clone the repo: `git clone https://github.com/akki-io/vote-donut`
- `cd vote-donut`
- `yarn install`
- `yarn serve`
- `amplify init`
- `amplify publish`

# Deploy AS-IS
- Fork the repo
- On the forked repo click the "Deploy to Amplify Console" button.
