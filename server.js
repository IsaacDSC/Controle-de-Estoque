const express = require('express')
const handlebars =  require('express-handlebars')
const bodyParser = require('body-parser')
const path =  require('path')
const app = express()

//adionando rotas
const home = require('./routes/home')

//configurando bodyparser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//configurando handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//cofig pasta public
app.use(express.static(path.join(__dirname, 'public')))

//enviando para router
app.use('/', home)

//server
const Port = 3000
app.listen(Port, ()=>{
    console.log(`http://localhost:${Port}`)
    console.log('Break Server Ctrl + C ')
})