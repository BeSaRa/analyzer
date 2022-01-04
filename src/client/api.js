const http = require('axios');
const API_URL = 'http://localhost:8000/api';

/**
 *
 * @param url
 * @returns {Promise<{status:{code:string,msg:string}}>}
 */
export function analyseUrl(url) {
    return http.get(API_URL, {
        params: {url}
    }).then(res => res.data);
}
