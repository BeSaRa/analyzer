require('dotenv').config();
const express = require('express');
const FormData = require('form-data');
const cors = require('cors');
const {externalApi} = require("./external-api");
const app = express();
const {API_KEY} = process.env;
app.use(cors());

app.use(express.static('dist'))

app.get('/api', async (req, res) => {
    const formData = new FormData();
    formData.append('key', API_KEY);
    try {
        const result = await externalApi(req.query.url)
        res.send(result);
    } catch (e) {
        console.log(e);
        res.status(500).send('something went wrong ');
    }
})


app.listen(8000, () => {
    console.log('listen to port :', 8000);
});
