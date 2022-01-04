require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {externalApi} = require("./external-api");
const app = express();

app.use(cors());

app.use(express.static('dist'))

app.get('/', (_req, res) => {
    res.sendFile('dist/index.html');
})

app.get('/api', async (req, res) => {
    try {
        const result = await externalApi(req.query.url)
        res.send(result);
    } catch (e) {
        console.log(e);
        res.status(500).send('something went wrong ');
    }
})


app.listen(8000, () => {
    console.log('listen to port : http://localhost:8000');
});
