
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.type('text/html')
    res.send(region('user'))
})

app.get('user', (req, res) => {
    res.type('text/html')
    res.send(region('user'))
})

app.get('/account', (req, res) => {
    res.type('text/html')
    res.send(region('acount'))
})

app.get('/content', (req, res) => {
    res.type('text/html')
    res.send(region('content'))
})

app.use((req, res) => {
    res.type('text/html')
    res.status(404)
    res.send(region('error'))
})
app.listen(port, (req,res) => {

    console.log(`region service running  at http://localhost:${port}/`)
})

function region(type = undefined){
    const user = require('./user');
    const account= require('./account');
    const content= require('./content');
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