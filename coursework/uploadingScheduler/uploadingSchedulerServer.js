const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.type('text/html')
    res.send(serveUploading())
})

app.get('/account', (req, res) => {
    res.type('text/html')
    res.send(serveUploading('account'))
})

app.get('/user', (req, res) => {
    res.type('text/html')
    res.send(serveUploading('user'))
})

app.get('/money', (req, res) => {
    res.type('text/html')
    res.send(serveUploading('money'))
})

app.get('/content', (req, res) => {
    res.type('text/html')
    res.send(serveUploading('content'))
})

app.use((req, res) => {
    res.type('text/html')
    res.status(404)
    res.send(serveUploading('error'))
})

app.listen(port, (req,res) => {
    console.log(`Uploading service running  at http://localhost:${port}/`)
})

function serveUploading(type = undefined){
    const account = require('./account');
    const user = require('./user');
    const money = require('./money');
    const content = require('./content');

    let message = undefined
    if(type === undefined){
         message = `Welcome to Uploading Page!`
    }
    else if(type === "account"){
        message = account.serveAccount()
    }
    else if(type === "user"){
        message = user.serveUser()
    }
    else if(type === "money"){
        message = money.serveMoney()
    }
    else if(type === "content"){
        message = content.serveContent()
    }
    else{
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
    <center> <br>${message}</center></div>
    </body>
    </html>`

    return contentPayload
}