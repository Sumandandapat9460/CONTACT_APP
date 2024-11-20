// package.json
// server.js
// .env = npm i dotenv

const express = require('express')
const app = express()
const {connect} = require('mongoose');
let {PORT,MONGODB_URI}=require('./config/index')
const schema=require('./schema/schema')
const {engine} = require('express-handlebars')
const routing = require('./router/router')


app.engine('handlebars', engine())
app.set('view engine','handlebars')

let connectDb = async()=>{
    await connect(MONGODB_URI) //await connect(MONGODB_URI)
    console.log("mongodb connected"); 
}
connectDb()

app.get('/', (req, res) =>{
    res.send('Hello')
})
app.get('/home', (req, res) =>{
    res.render('home',{title: 'Home Page'})
})

app.use('/api',routing)

app.listen(PORT,err=>{
    if(err) throw err;
    console.log("server is running on port 5000");
    
})