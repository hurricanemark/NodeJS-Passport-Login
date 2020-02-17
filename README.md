# Project: Node.js Passport Login 

## Title: PassportLogin

## Description

This code base is a simplified structure of Login using PassportJS.  It demonstrate the implementation of passport-local, passort-session with expressJS, NodeJS, EJS.  It is without CSS.  It is without the backend database, content management.  

Where to go from here?  Obviously, we could employ styling and data modelign, then on to JWT.

[x] PassportJS
[ ] Style CSS
[ ] Modeling using MongoDB Atlas
[ ] JWT

## Screenshots

**Register**
![register](https://github.com/hurricanemark/NodeJS-Passport-Login/blob/master/assets/img/register.PNG)

---

**Login**
![Login](https://github.com/hurricanemark/NodeJS-Passport-Login/blob/master/assets/img/login.PNG)

---

**Index**
![index page](https://github.com/hurricanemark/NodeJS-Passport-Login/blob/master/assets/img/indexpage.PNG)

## References

[EJS](https://ejs.co/#about)

[ExpressJS](https://expressjs.com/)

[nodejs](https://nodejs.org/en/)

[bscript or bscryptjs](https://passwordhashing.com/BCrypt)
*bcrypt is a password hashing function designed by Niels Provos and David Mazières, based on the Blowfish cipher, and presented at USENIX in 1999.*

[passportJS](http://www.passportjs.org/packages/passport-local/)


# Setting Started

**Environment** `vscode`
You need to  install extension for 
EJS Language Support!  EJS is the Embedded JavaScript templating language that lets you generate HTML markup with plain JavaScript.

`npm init`

`npm i express ejs`

`npm i --save-dev nodemon dotenv`

*bcrypt is used for hashing passwords, ...*

`npm i bcrypt`  

*passport passport-local are used for password authentication.  express-session is for local session, express-flash displays invalid authentication messages*


`npm i passport passport-local express-session express-flash`

*Logic for passport,...,express-flash will be written in passport-config.js*


`npm i method-override`

*method-override alternates POST so we can call app.delete to implement logout*

Then,  

- Create the following files:  .env .gitignore

- Insert into .gitignore

```
.env

node_modules
```  

- Insert into .env  

```
SESSION_SECRET=your_secret_could_be_anything_here
```  

- Edit package.json

`"scripts": { "devStart": "nodemon server.js" }`

- To start the express server on the terminal:

`npm run devStart`