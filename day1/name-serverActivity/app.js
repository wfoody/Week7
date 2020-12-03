
const express = require('express')
const app = express()
const cors = require('cors')

let movies = []

app.use(cors())

app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/name', (req, res) => {
    let name = {firstName: 'John', lastName: 'Doe'}
    res.send(name)
})

app.get('/movies', (req, res) => {
    res.json(movies)
})

app.get('/digital-crafts/cohort/:year', (req, res) => {
    let year = req.params.year
    res.send('I study at DigitalCrafts ' + year + ' cohort')
})

app.post('/movies', (req, res) => {

    let title = req.body.title
    let year = req.body.year
    console.log(title, year)

    let movie = {title: title, year: year}
    movies.push(movie)

    res.send({success: true})
})



app.listen(3000, (req, res) => {
    console.log('Server is running')
})