
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
    
    if(title != null && priority != null && dateCreated != null) {
        let todoItem = {title: title, priority: priority, dateCreated: dateCreated}
        todos.push(todoItem)
        res.json({success: true})
    }else {
        res.json({success: false, errorMessage: 'Unable to add task'})
    }
})


app.listen(3000, () => {
    console.log('Server is running...')
})