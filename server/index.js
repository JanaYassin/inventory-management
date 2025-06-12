const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.use(bodyParser.json());

let items = [];

app.get('/api/items', (req, res) =>{
    res.json(items);
})

app.post('/api/items', (req, res) => {
    const item = { id: Date.now(), date: new Date().toLocaleString(), ...req.body };
    items.push(item);
    res.json(item);
});
app.put('/api/items/:id', (req, res) =>{
    const id = Number(req.params.id);
    items = items.map(item => item.id === id ? { ...item, ...req.body }: item);
    res.sendStatus(200);
});

app.delete('/api/items/:id', (req, res) =>{
    const id = Number(req.params.id);
    items = items.filter(item => item.id !== id);
    res.sendStatus(204);
});
 app.listen(5000, () => console.log('Server running on http://localhost:5000'));