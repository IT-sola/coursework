
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.type('text/html')
    res.send(subcription('user'))
})

app.get('user', (req, res) => {
    res.type('text/html')
    res.send(subcription('user'))
})

app.get('/account', (req, res) => {
    res.type('text/html')
    res.send(subcription('acount'))
})

app.get('/content', (req, res) => {
    res.type('text/html')
    res.send(subcription('content'))
})
app.get('/money', (req, res) => {
    res.type('text/html')
    res.send(subcription('money'))
})

app.use((req, res) => {
    res.type('text/html')
    res.status(404)
    res.send(subcription('error'))
})
app.listen(port, (req,res) => {

    console.log(`subcription service running  at http://localhost:${port}/`)
})

function subcription(type = undefined){
    const user = require('./user');
    const account= require('./account');
    const content= require('./content');
    const money= require('./money');
    let message = undefined
    if(type === undefined){
         message = `Microservice is working!`
    }
    else if(type === "account"){
        message = account.serveMessage()
    }
    else if(type === "content"){
        message = content.serveMessage()
    }
    else if(type === "user"){
        message = user.serveMessage()
    }
    else if(type === "money")
    {
        message = money.serveMessage()
    }
    else{
        cup =`&#129335;`
        message = "Not available"
    }
    let contentPayload = `    
    <html>
    <head>
    <style>
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    </style>
    </head>
    <body>
    <div style="font-size:80">
    <center><br>${message}</center></div>
    </body>
    </html>`

    return contentPayload
}