const http = require("axios");
const externalAPIURL = 'https://api.meaningcloud.com/sentiment-2.1';
const {API_KEY} = process.env;

async function externalApi(url) {
    return http
        .post(externalAPIURL, {
            key: API_KEY,
            lang: 'en',
            url: url
        })
        .then((res) => res.data)
}

module.exports = {
    externalApi
}
