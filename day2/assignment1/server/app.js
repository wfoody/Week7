const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')


// setting up mustache as a templating engine
app.engine('mustache', mustacheExpress())

// the pages are located in the views directory
app.set('views', './views')

// extension for all the pages
app.set('view engine', 'mustache')

// if using mustache, need these three lines^^^^

app.use(express.urlencoded())



app.get('/',(req,res) => {
    res.render('index')
})

app.get('/users', (req, res) => {

    let users = [
        {name: 'will', age: 25}, 
        {name: 'amel', age: 24}
]

    users = []

    res.render('index', {users: users})
})

app.get('/add-user', (req, res) => {
    res.render('add-user')
})

app.post('/add-user', (req, res) => {
    let name = req.body.customerName
    let age = req.body.age

    console.log(name)
    console.log(age)

    res.sendStatus(200)
})



// running server
app.listen(3000, () => {
    console.log('Server is running...')
})