//setup

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000



app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)


//CRUD Operations

app.get('/' , (request , response) => {
    response.json({info: 'Node.js , Express and Postgres API'})
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)





//Server Operations

app.listen(port , () => {
    console.log(`Super awesome API Server is running on port - ${port}.`)
})