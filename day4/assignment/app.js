const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const { v4: uuidv4 } = require('uuid')
const session = require('express-session')

app.use(express.urlencoded())

app.use(session({
    secret: 'hello',
    resave: false,
    saveUninitialized: true
}))



let users = []



// setting up mustache as a templating engine
app.engine('mustache', mustacheExpress())

// the pages are located in the views directory
app.set('views', './views')

// extension for all the pages
app.set('view engine', 'mustache')

// if using mustache, need these three lines^^^^



app.get('/', (req, res) => {
    res.render('index')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    let user = {username: username, password: password}

    users.push(user)
    res.redirect('/login')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const persistedUser = users.find(user => {
        return user.username == username && user.password == password
    })

    if(persistedUser) {
        if(req.session) {
            req.session.username = username
            res.redirect('/trips')
        }
    }else {
        res.render('login', {message: "Username or password is incorrect"})
    }
})

app.get('/trips', (req, res) => {
   
    res.render('add-trip')
})

app.post('/trips', (req, res) => {
    let name = req.body.cityName
    let dateDeparture = req.body.dateDeparture
    let dateReturn = req.body.dateReturn

    let trips = [
        {name: name, dateDeparture: dateDeparture, dateReturn: dateReturn}
    ]

    console.log(name)
    console.log(dateDeparture)
    console.log(dateReturn)

    res.render('add-trip', {trips: trips})
})


app.listen(3000, () => {
    console.log('Server is running...')
})