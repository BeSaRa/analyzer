
function getTable() {
    return document.getElementById('resultTable')
}
export function displayTable() {
    const table = getTable();
    table.classList.add('show');
}

export function hideTable() {
    const table = getTable();
    table.classList.remove('show');
}
