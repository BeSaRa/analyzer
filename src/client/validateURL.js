/**
 * to check if it is valid url
 * @param url{string}
 * @returns {boolean}
 */
export function validateURL(url) {
    return url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) !== null;
}
