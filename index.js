const express = require('express');
const cors = require('cors');

const app=express()
const port= process.env.PORT || 5000 ;

app.get('/', (req, res)=>{
    res.send('GURUJON BACKEND CONNECTED')
})

app.listen(port, (req, res)=>{
    console.log('listening to port ',port);
})