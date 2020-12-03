
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/movie', (req, res) => {
    let movie = {name: 'Spiderman', year: '2010'}
    res.json(movie)

})

app.get('/movies', (req, res) => {
    let movies = [
        {name: 'Spiderman', year: '2010'},
        {name: 'Batman', year: '2010'},
    ]

    res.json(movies)

})



app.listen(3000, () => {
    console.log('Server is running...')
})