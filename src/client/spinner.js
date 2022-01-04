
function getSpinner() {
    return document.getElementById('spinner')
}

export function displaySpinner() {
    const spinner = getSpinner();
    spinner.classList.add('show');
}

export function hideSpinner() {
    const spinner = getSpinner();
    spinner.classList.remove('show');
}
