import "bootstrap/scss/bootstrap.scss"
import "./css/spinner.scss"
import "./css/table-result.scss"
import {isValidURL} from "./isValidURL";
import {analyseUrl} from "./api";
import {displayTable, hideTable} from "./table";
import {displaySpinner, hideSpinner} from "./spinner";

const properties = ['agreement', 'confidence', 'irony', 'model', 'score_tag', 'subjectivity'];

export function handleSubmit(url, row) {
    hideTable();
    if (!isValidURL(url)) {
        alert('invalid url')
        return;
    }
    displaySpinner();
    analyseUrl(url)
        .then((res) => {
            displayTable();
            renderResult(res, row);
        })
        .catch(() => {
            alert('something went wrong !!')
        })
        .finally(() => {
            hideSpinner();
        })
}


function renderResult(result, row) {
    row.innerHTML = '';
    properties.forEach((property) => {
        row.appendChild(createTd(result[property]));
    })
}

function createTd(value) {
    const td = document.createElement('td');
    td.innerText = value;
    return td;
}

const afterContentLoaded = () => {
    const analyseBtn = document.getElementById('analyseBtn');
    const urlInput = document.getElementById('urlInput');
    const row = document.getElementById('result');
    analyseBtn.addEventListener('click', () => handleSubmit(urlInput.value, row));

}

// after document content loaded
document.addEventListener('DOMContentLoaded', afterContentLoaded);



