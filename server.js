const express = require('express');
const cors = require('cors');
const data = require('./data/posts.json');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/posts', (req, res)=>{
    try {
        res.status(200).json(data)
    } catch (error) {
        res.json(error.message)
    }
})

app.listen(PORT, ()=>{
    console.log(`Post App is listening on ${PORT}`)
})