//Regex
const textInput = /^[a-zA-Z]{1,}[^0-9.+*/$%µ!§:;,?={}²&~"#()`@]$/;
const numberInput = /[0-9]/;

// Ciblage de la modal
let modal = document.getElementById("myModal")

function isValidField(inputField, errorLabel) {
    inputField.classList.remove('errorInput');
    inputField.classList.add('validInput');
    errorLabel.style.display = "none";
    errorLabel.textContent = "";
}

function isErrorField(inputField, errorLabel, msgError) {
    inputField.classList.add('errorInput');
    inputField.classList.remove('validInput');
    errorLabel.textContent = msgError;
    errorLabel.style.display = "block";
}

function addEventsForInput() {
    addEventForFirstname();
    addEventForLastname();
    addEventForEmail();
    addEventForBirthdate();
}

function getField(selecteur) {
    let modal = document.getElementById("myModal")
    return modal.querySelector(selecteur);
}

// Fonction de validation du prénom
function validateFirstName() {
    let first = getField("#first");
    let errorFirst = modal.querySelector("#errorFirst");
    if (first.value.length <= 2) {
        isErrorField(first, errorFirst, "Veuillez entrer 2 caractères ou plus pour le champ du prénom")
    } else {
        isValidField(first, errorFirst)
    }
}

function addEventForFirstname() {
    getField("#first").addEventListener("input", function () {
        validateFirstName();
    });
}

// Fonction de validation du nom
function validateLastName() {
    let last = getField("#last");
    let errorLast = modal.querySelector("#errorLast");
    if (last.value.length <= 2) {
        isErrorField(last, errorLast, "Veuillez entrer 2 caractères ou plus pour le champ du nom")
    } else {
        isValidField(last, errorLast)
    }
}

function addEventForLastname() {
    getField("#last").addEventListener("input", function () {
        validateLastName();
    });
}

// Fonction de validation de l'email
function validateEmail() {
    let email = getField("#email");
    let errorEmail = modal.querySelector("#errorEmail");
    let mailInput = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!mailInput.test(email.value)) {
        isErrorField(email, errorEmail, "Veuillez entrer une adresse mail valide")
    } else {
        isValidField(email, errorEmail)
    }
}

function addEventForEmail() {
    getField("#email").addEventListener("input", function () {
        validateEmail();
    });
}

// Fonction de validation de la date de naissance
function validateBirthdate() {
    let birthdate = getField("#birthdate");
    let errorBirthdate = modal.querySelector("#errorBirthdate");
    if (birthdate === "") {
        isErrorField(birthdate, errorBirthdate, "Veuillez entrer une date de naissance");
    } else {
        let birthdateDate = new Date(birthdate.value);
        let currentDate = new Date();
        let ageDifference = currentDate.getFullYear() - birthdateDate.getFullYear();
        if (ageDifference >= 13) {
            isValidField(birthdate, errorBirthdate);
        } else {
            isErrorField(birthdate, errorBirthdate, "Vous devez avoir au moins 13 ans pour participer");
        }
    }
}

function addEventForBirthdate() {
    getField("#birthdate").addEventListener("input", function () {
        validateBirthdate();
    });
}

// Fonction de validation de la quantité
function validateQuantity() {
    let quantity = getField("#quantity");
    let errorQuantity = modal.querySelector("#errorQuantity");
    if (quantity.value === "") {
        isErrorField(quantity, errorQuantity, "Vous devez ajouter un nombre.");
    } else {
        let numericInput = /^\d+$/;
        if (numericInput.test(quantity.value)) {
            isValidField(quantity, errorQuantity);
        } else {
            isErrorField(quantity, errorQuantity, "Vous devez ajouter un nombre.");
        }
    }
}

function addEventForQuantity() {
    getField("#quantity").addEventListener("input", function () {
        validateQuantity();
    });
}

// // Ajouter un écouteur d'événement input au champ de la quantité
// let quantityInput = modal.querySelector("#quantity");
// quantityInput.addEventListener("input", validateQuantity);

// Fonction de validation des options
function validateOptions() {
    let locationOptions = modal.querySelectorAll("[name='location']");
    let errorOption = modal.querySelector("#errorOption");
    let optionSelected = false;
    for (let i = 0; i < locationOptions.length; i++) {
        if (locationOptions[i].checked) {
            optionSelected = true;
            break;
        }
    }
    if (!optionSelected) {
        errorOption.textContent = "Vous devez choisir une option.";
        errorOption.style.display = "block";
    } else {
        errorOption.textContent = "";
        errorOption.style.display = "none";
        return isValid;
    }
}
// Ajouter un écouteur d'événement input aux options
let locationOptions = modal.querySelectorAll("[name='location']");
locationOptions.forEach(option => {
    option.addEventListener("input", validateOptions);
});

// Fonction de validation des conditions
function validateConditions() {
    let checkbox1 = modal.querySelector("#checkbox1");
    let errorTerms = modal.querySelector("#errorTerms");
    if (!checkbox1.checked) {
        errorTerms.textContent = "Vous devez accepter les conditions d'utilisation.";
        errorTerms.style.display = "block";
    } else {
        errorTerms.textContent = "";
        errorTerms.style.display = "none";
        return isValid;
    }
}
// Ajouter un écouteur d'événement input à la case à cocher des conditions
let checkbox1 = modal.querySelector("#checkbox1");
checkbox1.addEventListener("input", validateConditions);

// Fonction de validation du formulaire
function validateForm(e) {
    e.preventDefault();

    let isValid = true;
    isValid = validateFirstName() && validateLastName() && validateEmail() && validateQuantity() && isValid;
    isValid = validateBirthdate() && isValid;
    isValid = validateOptions() && isValid;
    isValid = validateConditions() && isValid;
    return isValid;
}