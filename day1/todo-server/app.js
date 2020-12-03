
const express = require('express')
const app = express()
const cors = require('cors')
const { v4: uuidv4 } = require('uuid')



let todos = []

// app.get('/todos', (req, res) => {
//     res.send("hello")
// })
app.use(cors())
app.use(express.json())

app.get('/todos', (req, res) => {
    res.json(todos)
})


app.post('/todos', (req, res) => {
    let title = req.body.title
    let priority = req.body.priority
    let dateCreated = req.body.dateCreated
    
    if(title != null && priority != null && dateCreated != null) {
        let todoItem = {taskId: uuidv4(), title: title, priority: priority, dateCreated: dateCreated}
        todos.push(todoItem)
        res.json({success: true})
    }else {
        res.json({success: false, errorMessage: 'Unable to add task'})
    }
})

app.delete('/todos/:taskId', (req, res) => {

    let taskId = req.params.taskId
    
    todos = todos.filter(todo => {
        return todo.taskId != taskId

    })

    res.json({success: true})
})


app.listen(3000, () => {
    console.log('Server is running...')
})