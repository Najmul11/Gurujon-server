const express = require('express');
const cors = require('cors');


const app=express()
const port= process.env.PORT || 5000 ;

app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('GURUJON BACKEND CONNECTED')
})


const courseCategories=require('./Data/course-categories.json')
app.get('/categories', (req, res)=>{
    res.send(courseCategories)
})


app.listen(port, (req, res)=>{
    console.log('listening to port ',port);
})