let VALID_FORM = {
    first: false,
    last: false,
    email: false,
    birthdate: false,
    quantity: false,
    location: false,
    terms: false,
};

function strUcFirst(str) {
    return str.length < 1 ? "" : str[0].toUpperCase() + str.slice(1);
}
