
const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

// setting up mustache as a templating engine 
app.engine('mustache', mustacheExpresss())
// the pages are located in the views directory
app.set('views','./views')
// extension for all the pages 
app.set('view engine', 'mustache')

// render index.mustache page for the root (/) route 
app.get('/',(req,res) => {
    res.render('index',{name: "Mary"})
})

// run the server 
app.listen(3000, () => {
    console.log('Server is running...')
})