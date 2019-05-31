const express = require('express');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller')
const app = express();
const {SERVER_PORT, CONNECTION_STRING}= process.env;
const {create, getAll, del}= controller

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Database Connected ^_^')
}).catch(error => console.log(error))

app.get('/api/inventory', getAll)
app.post('/api/product', create)
app.delete('/api/product/:id', del)

app.listen(SERVER_PORT, ()=> console.log(`Listening to Port ${SERVER_PORT}`))