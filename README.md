# CSCI 201 Group Project: Newsfeed

Authors | GitHub|
-----------|-------|
|Austin Traver|[@austintraver](github.com/user/austintraver)|
|Claire Powers|[@clairepo](github.com/user/clairepo)|
|Arif Ahmed|[@arifahme](github.com/user/arifahme)|
|Vikash Mody|[@vikasham](github.com/user/vikasham)|

## Dependencies

## Java Application
Note that this website was built in exclusively NodeJS
The java component of this project is part of a different application,
a RESTful server, that is currently deployed at [polytime.solutions](https://github.com/austintraver/parsify)
Parsify runs completely in Java, and is part of our backend. It is a server
that, given a request for a particular category of news, finds new articles and
returns them in a formatted way.


#### Homebrew
`$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

#### Java (11.0.2)
`$ brew cask install java`

#### Node (11.12.0)
`$ brew install node`

#### MySQL (8.0.15)
`$ brew install mysql`

#### Yarn (1.15.2)
`$ brew install yarn`

## Before Deploying

Clone this repository, inside of the root directory type the following commands
`$ cd ./frontend`
`$ yarn install`
`$ cd ../backend`
`$ yarn install`
`$ cd ../`
`$ yarn install`
`$ yarn global add nodemon`
`$ yarn global add create-react-app`
