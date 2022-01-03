const express = require('express');
const FormData = require('form-data');
const http = require('axios');
const cors = require('cors');
require('dotenv').config();
const app = express();
const {API_KEY} = process.env;
const apiURL = '';
app.use(cors());

app.use(express.static('/dist'))
app.get('/', (req, res) => {
    res.send("API Working")
})
app.get('/api', async (req, res) => {
    const url = 'https://api.meaningcloud.com';
    const formData = new FormData();
    formData.append('key', API_KEY);

    const response = await http
        .post('https://api.meaningcloud.com/sentiment-2.1', {
            key: API_KEY,
            lang: 'en',
            url: url
        })
        .then((res) => res.data)

    res.send(response)
})


app.listen(8000, () => {
    console.log('listen to port :', 8000);
});
