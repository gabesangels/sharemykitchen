[![Build Status](https://travis-ci.org/gabesangels/sharemykitchen.svg?branch=master)](https://travis-ci.org/gabesangels/sharemykitchen)

# Share My Kitchen

Share my kitchen is a place where people can rent out a kitchen/entertaining
space. Guests can filter through listings based on selection criteria like
appliances they would like and available dates, while hosts can post ads
for their spaces.

## Prerequisites 

- Yarn package manager: https://yarnpkg.com/en/
- MongoDB
- Register yourself and team members with facebook for developers 
  (https://developers.facebook.com/).


### Getting Started

Fork and clone down the repository to your local machine. 
From the terminal, install all of the dependencies with yarn install:

```
yarn install
```
Create a .env file in the root directory. Copy and paste the contents of env-sample into the .env file. 

Start the server with yarn start:

```
yarn start
```
Start the compiler:

```
yarn dev:wds
```
The server is running on port 8000, so navigate to localhost:8000
in your browser to view the app.

To better acquiant yourself with the underlying file structure and technologies
behing ShareMyKitchen, it would be helpful to review the first 6 steps of this
JavaScript Fullstack App from Scratch repo:

https://github.com/verekia/js-stack-from-scratch

*Note that Share My Kitchen does not use all of the technologies mentioned in
the above tutorial. 

### Tests and Linting

### Tech Stack

Front-end:
- React with Redux & React Router
- Spectre.css 

Back-end:
- Express
- MongoDB with Mongoose
- Webpack
- Babel

Testing:
- Travis CI
- Sentry

### Authors

- Gabe Trinidad
- Stu Owens
- Hank Bowen
