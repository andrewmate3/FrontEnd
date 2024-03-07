const express = require('express');
const fs = require('fs');
const app = express();

const PORT = 8000;
const cors = require('cors')

app.use(cors());

const data = JSON.parse(fs.readFileSync('./src/Resources/data.json'));

app.get('/api/data', (req, res) => {
    const responseData = {
        medical: data
    };
    res.json(responseData);
});

app.get('/api/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = data.find(item => item.id === id);
    if(item){
        res.json(item);
    } else {
        res.status(404).json({error: 'Data not found'})
    }
});

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})