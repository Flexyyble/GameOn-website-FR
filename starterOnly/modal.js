function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Close modal on click
closeBtn.addEventListener("click", function() {
  modalbg.style.display = "none";
});

// Form Elements Selector
const first = document.querySelector("#first");
const last = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");

//Regex
const textInput = /^[a-zA-Z]{1,}[^0-9.+*/$%µ!§:;,?={}²&~"#()`@]$/;
const numberInput = /[0-9]/;
const mailInput = /^([a-zA-Z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;


/////////////////////
// Form Validation//
///////////////////

// First Name
first.addEventListener("input", function(e) {
  let value = e.target.value;
  let errorFirst = document.getElementById("errorFirst");
  if (value.length < 2) {
    e.preventDefault(); // Prevent submitting form
    errorFirst.style.display = "block";
    first.classList.add('errorInput');
    errorFirst.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    return false;
  } else {
    first.classList.remove('errorInput');
    errorFirst.style.display = "none";
    errorFirst.textContent = "";
    return true;
  }
});

first.addEventListener("keyup", function(e) {
  let value = e.target.value;
  let errorFirst = document.getElementById("errorFirst");
  if (value.length < 2) {
    e.preventDefault(); // Prevent submitting form
    errorFirst.style.display = "block";
    errorFirst.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
  } else {
    errorFirst.style.display = "none";
    errorFirst.textContent = "";
  }
});

// Last Name
last.addEventListener("input", function(e) {
  let value = e.target.value;
  let errorLast = document.getElementById("errorLast");
  if (value.length < 2) {
    e.preventDefault(); // Prevent submitting form
    errorLast.style.display = "block";
    last.classList.add('errorInput');
    errorLast.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    return false;
  } else {
    last.classList.remove('errorInput');
    errorLast.style.display = "none";
    errorLast.textContent = "";
    return true;
  }
});

last.addEventListener("keyup", function(e) {
  let value = e.target.value;
  let errorLast = document.getElementById("errorLast");
  if (value.length < 2) {
    e.preventDefault(); // Prevent submitting form
    errorLast.style.display = "block";
    errorLast.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
  } else {
    errorLast.style.display = "none";
    errorLast.textContent = "";
  }
});

// Email
email.addEventListener("input", function(e) {
  let value = e.target.value;
  if (!mailInput.test(value)){
    email.classList.add('errorInput');
    return false;
  }
  else {
    email.classList.remove('errorInput')
    return true;
  }
});

email.addEventListener("keyup", function(e) {
  let value = e.target.value;
  if (mailInput.test(value)){
    email.classList.add('validInput');
    return true;
  }
  else{
    email.classList.remove('validInput');
    return false;
  }
});

// Quantity
quantity.addEventListener("input", function(e){
  let value = e.target.value;
  if (!numberInput.test(value)){
    quantity.classList.add('errorInput');
    return false;
  } else {
    quantity.classList.remove('errorInput');
    return true;
  }
});

quantity.addEventListener("keyup", function(e) {
  let value = e.target.value;
  if (numberInput.test(value)){
    quantity.classList.add('validInput');
    return true;
  }
  else{
    quantity.classList.remove('validInput');
    return false;
  }
});

// Birthdate
birthdate.addEventListener("input", function(e) {
  let value = e.target.value;
  let errorBirthdate = document.getElementById("errorBirthdate");
  if (value !== "") {
    errorBirthdate.style.display = "none";
    errorBirthdate.textContent = "";
  }
});

// Submit event handler
document.forms.reserve.addEventListener("submit", function(e) {

  // Options validation
  let locationOptions = document.getElementsByName("location");
  let errorOption = document.getElementById("errorOption");
  let optionSelected = false;
  for (let i = 0; i < locationOptions.length; i++) {
    if (locationOptions[i].checked) {
      optionSelected = true;
      break;
    }
  }
  if (!optionSelected) {
    e.preventDefault(); // Prevent submitting form
    errorOption.style.display = "block";
    errorOption.textContent = "Vous devez choisir une option.";
  } else {
    errorOption.style.display = "none";
    errorOption.textContent = "";
  }

  // Terms validation
  let checkbox1 = document.getElementById("checkbox1");
  let errorTerms = document.getElementById("errorTerms");
  if (!checkbox1.checked) {
    e.preventDefault(); // Prevent submitting form
    errorTerms.style.display = "block";
    errorTerms.textContent = "Vous devez accepter les conditions d'utilisation.";
  } else {
    errorTerms.style.display = "none";
    errorTerms.textContent = "";
  }

  // Birthdate validation
  let birthdate = document.getElementById("birthdate").value;
  let errorBirthdate = document.getElementById("errorBirthdate");
  if (birthdate === "") {
    e.preventDefault(); // Prevent submitting form
    errorBirthdate.style.display = "block";
    errorBirthdate.textContent = "Vous devez entrer votre date de naissance.";
  } else {
    errorBirthdate.style.display = "none";
    errorBirthdate.textContent = "";
  }
});