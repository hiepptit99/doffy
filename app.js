const express = require('express')
const config = require('config')
const bodyParser = require('body-parser')



const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/static', express.static(__dirname + '/public'))
const controlers = require(__dirname + '/app/controllers')
app.use(controlers)

app.set('views', './app/views')
app.set('view engine', 'ejs')

const port = config.get('server.port')
const host = config.get('server.host')
app.listen(port, host, () => {
  console.log("Server is running on port", port)
})