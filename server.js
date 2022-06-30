/* 	
first load all environment variables onto the development 
environment, if not in production mode. 
*/

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}


const express = require('express')
const bcrypt = require('bcrypt')
const flash = require('express-flash')
const session = require('express-session')
const passport = require('passport')
const methodOverride = require('method-override')
const initializePassport = require('./passport_config')

initializePassport(
	passport, 
	email => users.find(user => user.email === email),
	id => users.find(user => user.id === id)
)



/* Todo: create model and migrate to database */
/* 
For now, declare local variables to store data instead of database.
Important: NO in production.  Data goes away at end of session.
 */
const users = []

const app = express()
app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false}))
app.use(flash())  // manage messages
app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false
}))

app.use(passport.initialize())  //encrypt passport use for password
app.use(passport.session())  // persist authenticated passport through out the session
app.use(methodOverride('_method'))

app.get('/', checkAuthenticated, (req, res) => {
	console.log(req.user.name)
	res.render('index.ejs', { name: req.user.name })
})

app.get('/login', checkNotAuthenticated, (req, res) => {
	res.render('login.ejs')
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/login',
	failureFlash: true
}))

app.get('/register', checkNotAuthenticated, (req, res) => {
	res.render('register.ejs')
})

app.post('/register', checkNotAuthenticated, async (req, res) => {
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, 10)
		users.push({
			id: Date.now().toString(),
			name: req.body.name,
			email: req.body.email,
			password: hashedPassword
		})
		console.log("Latet name in registry: ", req.body.name)
		res.redirect('/login')
	} catch {
		res.redirect('/register')

	}
	console.log(users)
})


function checkAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next()
	}

	res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return res.redirect('/')
	}
	next()	
}

app.delete('/logout', (req, res) => {
	req.logout() //passport takes care of this.  We donot need to implement it.
	res.redirect('/login')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
