const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courseCategories = require('./data/course-categories.json');

app.get('/', (req, res) => {
    res.send('working on this project ');
});

app.get('/course-categories', (req, res) => {
    res.send(courseCategories)
});

app.get('/course-categories/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courseCategories.find(n => n.id === id);
    res.send(selectedCourse);
});

app.listen(port, () => {
    console.log('API Running on Port', port);
})