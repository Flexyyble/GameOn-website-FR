main();

function main() {
    addEventForForm();
}

function addEventForForm() {
    addEventForFirstname();
    addEventForLastname();
    addEventForEmail();
    addEventForBirthdate();
    addEventForQuantity();
    addEventForOptions();
    addEventForConditions();
    addEventOnSubmitForm();
}

// Validation des champs
function isValidField(fieldName, inputField, errorLabel) {
    inputField.classList.remove("errorInput");
    inputField.classList.add("validInput");
    errorLabel.style.display = "none";
    errorLabel.textContent = "";

    VALID_FORM[fieldName] = true;
    toggleSubmitBtn();
}

// Message d'erreur pour un champ invalide
function isErrorField(fieldName, inputField, errorLabel, msgError) {
    inputField.classList.add("errorInput");
    inputField.classList.remove("validInput");
    errorLabel.textContent = msgError;
    errorLabel.style.display = "block";

    VALID_FORM[fieldName] = false;
    toggleSubmitBtn();
}

// Récupération du champ
function getField(fieldName) {
    let modal = document.getElementById("myModal");
    return modal.querySelector("#" + fieldName);
}

function getErrorField(fieldName) {
    let modal = document.getElementById("myModal");
    return modal.querySelector("#error" + strUcFirst(fieldName));
}

function validateFieldText(fieldName, msg) {
    let field = getField(fieldName);
    let errorField = getErrorField(fieldName);
    if (field.value.length <= 2) {
        isErrorField(
            fieldName,
            field,
            errorField,
            "Veuillez entrer 2 caractères ou plus pour le champ du " + msg
        );
    } else {
        isValidField(fieldName, field, errorField);
    }
}

// Fonction de validation du prénom
function validateFirstName() {
    validateFieldText("first", "prénom");
}

// Ajouter un écouteur d'événement input du prénom
function addEventForFirstname() {
    getField("first").addEventListener("input", function () {
        validateFirstName();
    });
}

// Fonction de validation du nom
function validateLastName() {
    validateFieldText("last", "nom");
}

// Ajouter un écouteur d'événement input du nom
function addEventForLastname() {
    getField("last").addEventListener("input", function () {
        validateLastName();
    });
}

// Fonction de validation de l'email
function validateEmail() {
    let fieldName = "email";
    let field = getField(fieldName);
    let errorField = getErrorField(fieldName);
    let mailInput = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!mailInput.test(email.value)) {
        isErrorField(
            fieldName,
            field,
            errorField,
            "Veuillez entrer une adresse mail valide"
        );
    } else {
        isValidField(fieldName, field, errorField);
    }
}

// Ajouter un écouteur d'événement input aux emails
function addEventForEmail() {
    getField("email").addEventListener("input", function () {
        validateEmail();
    });
}

// Fonction de validation de la date de naissance
function validateBirthdate() {
    let fieldName = "email";
    let field = getField(fieldName);
    let errorField = getErrorField(fieldName);
    if (birthdate === "") {
        isErrorField(
            birthdate,
            errorBirthdate,
            "Veuillez entrer une date de naissance"
        );
    } else {
        let birthdateDate = new Date(birthdate.value);
        let currentDate = new Date();
        let ageDifference = currentDate.getFullYear() - birthdateDate.getFullYear();
        if (ageDifference >= 13) {
            isValidField(fieldName, birthdate, errorBirthdate);
        } else {
            isErrorField(
                fieldName,
                birthdate,
                errorBirthdate,
                "Vous devez avoir au moins 13 ans pour participer"
            );
        }
    }
}

// Ajouter un écouteur d'événement input à l'anniversaire
function addEventForBirthdate() {
    getField("birthdate").addEventListener("input", function () {
        validateBirthdate();
    });
}

// Fonction de validation de la quantité
function validateQuantity() {
    let fieldName = "email";
    let field = getField(fieldName);
    let errorField = getErrorField(fieldName);
    if (quantity.value === "") {
        isErrorField(
            fieldName,
            quantity,
            errorQuantity,
            "Vous devez ajouter un nombre. Il peut être 0."
        );
    } else {
        let numericInput = /^\d+$/;
        if (numericInput.test(quantity.value)) {
            isValidField(fieldName, quantity, errorQuantity);
        } else {
            isErrorField(
                fieldName,
                quantity,
                errorQuantity,
                "Vous devez ajouter un nombre. Il peut être 0."
            );
        }
    }
}

// Ajouter un écouteur d'événement input au nombre de participations
function addEventForQuantity() {
    getField("quantity").addEventListener("input", function () {
        validateQuantity();
    });
}

// Fonction de validation des options
function validateOptions() {
    let locationOptions = document.querySelectorAll("[name='location']");
    let fieldName = "email";
    let field = getField(fieldName);
    let errorField = getErrorField(fieldName);
    let optionSelected = false;
    for (let i = 0; i < locationOptions.length; i++) {
        if (locationOptions[i].checked) {
            optionSelected = true;
            break;
        }
    }
    if (!optionSelected) {
        isErrorField(
            fieldName,
            locationOptions[0],
            errorOption,
            "Vous devez choisir une option."
        );
    } else {
        for (let i = 0; i < locationOptions.length; i++) {
            isValidField(fieldName, locationOptions[i], errorOption);
        }
    }
}

// Ajouter un écouteur d'événement input aux options
function addEventForOptions() {
    let locationOptions = document.querySelectorAll("[name='location']");
    locationOptions.forEach((option) => {
        option.addEventListener("input", function () {
            validateOptions();
        });
    });
}

// Fonction de validation des conditions
function validateConditions() {
    let fieldName = "email";
    let field = getField(fieldName);
    let errorField = getErrorField(fieldName);
    if (checkbox1.checked) {
        isValidField(fieldName, checkbox1, errorTerms);
    } else {
        isErrorField(
            fieldName,
            checkbox1,
            errorTerms,
            "Vous devez accepter les conditions d'utilisation."
        );
    }
}

// Ajouter un écouteur d'événement input à la case à cocher des conditions
function addEventForConditions() {
    getField("checkbox1").addEventListener("input", function () {
        validateConditions();
    });
}

function toggleSubmitBtn() {
    let inputs = document.getElementsByClassName("testInput");
    let isValid = true;
    let isValidLocation = false;
    for (i = 0; i < inputs.length; i++) {
        if (!inputs[i].classList.contains("validInput")) {
            console.log(inputs[i].name + "KO");
            isValid = false;
            return;
        }
    }
    getField("submitBtn").disabled = !isValid;
    getField("submitBtn").classList.toggle("btn-submit", isValid);
    return isValid;
}

function addEventOnSubmitForm() {
    const confirmClose = getField("close-btn");
    document
        .querySelector("#submitBtn")
        .addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector("form").style.display = "none";
            getField("confirmModal").style.display = "block";
        });
        confirmClose.addEventListener("click", function (event) {
            getField("confirmModal").style.display = "none";
            document.querySelector(".bground").style.display = "none";
    });
}
