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


const allCourses=require('./Data/allcourses.json')
app.get('/allcourses', (req, res)=>{
    res.send(allCourses)
})

app.get('/allcourses/:id',  (req, res)=>{
    const id=req.params.id;
    const filteredQursesByCategory= allCourses.filter(course=> id ===course.category_id)
    res.send(filteredQursesByCategory)
})

app.get('/checkout/:id', (req, res)=>{
    const id= req.params.id
    const courseById=allCourses.find(singleCourse=> singleCourse.course_id === id)
    res.send(courseById)
})


app.listen(port, (req, res)=>{
    console.log('listening to port ',port);
})