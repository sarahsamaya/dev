const express = require ('express');

const app = express();

/* ROUTES*/

// HTTP METHODS - GET 
app.get('/', (request, response) => {
    return response.json({ message: 'Hello Marvin'});
});

// HTTP METHODS - GET 
app.get('/projects', (request, response) => {
    return response.json([
    'Project 1',
    'Project 2'
    ]);
});

// HTTP METHODS - POST 
app.post('/projects', (request, response) => {
    return response.json([
    'Project 1',
    'Project 2',
    'Project 3',
    ]);
});

// HTTP METHODS - POST needs a identifier
app.put('/projects', (request, response) => {
    return response.json([
    'Project 1',
    'Project 2',
    'Project 3',
    ]);
});


app.listen(3334, () => {
    console.log('back-end started! 🐱‍🐉')
});