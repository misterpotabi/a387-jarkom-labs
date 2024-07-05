'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
/*
[ROUTE] '/'
[Response] => Hello world!
 */
app.get('/', (req, res) => {
    res.send('Hello! ini saya Fajarhardeka-S1SI18092-Komgraf\n')
})


app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)