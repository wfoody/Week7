
const express = require('express')
const app = express()
const cors = require('cors')


const todos = []

// app.get('/todos', (req, res) => {
//     res.send("hello")
// })
app.use(cors())
app.use(express.json())

app.get('/todos', (req, res) => {
    res.json(todos)
})


app.post('/todos', (req, res) => {
    console.log(req.body)
    let title = req.body.title
    let priority = req.body.priority
    let dateCreated = req.body.dateCreated
    

    let todoItem = {title: title, priority: priority, dateCreated: dateCreated}
    todos.push(todoItem)

    res.send({success: true})
})

app.listen(3000, () => {
    console.log('Server is running...')
})