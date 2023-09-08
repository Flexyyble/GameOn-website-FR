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
let VALID_FORM ={ 'first':false,'last':false,'email':false,'birthdate':false,'quantity':false,'location':false,'terms':false}


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function openModal() {
  launchModal();

  addEventsForInput();
  // Appel des fonctions de validation du formulaire de form.js
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  resetModal()
}

// Fonction de réinitialisation de la modal
function resetModal() {

  VALID_FORM ={ 'first':false,'last':false,'email':false,'birthdate':false,'quantity':false,'location':false,'terms':false}
  // Réinitialiser les champs du formulaire en vidant leurs valeurs
  document.getElementById("first").value = "";
  document.getElementById("last").value = "";
  document.getElementById("email").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("birthdate").value = "";
  document.getElementById("checkbox1").checked = false;

  // Réinitialiser les styles des champs en supprimant les classes d'erreur
  document.getElementById("first").classList.remove("errorInput", "validInput");
  document.getElementById("last").classList.remove("errorInput", "validInput");
  document.getElementById("email").classList.remove("errorInput", "validInput");
  document.getElementById("quantity").classList.remove("errorInput", "validInput");
  document.getElementById("birthdate").classList.remove("errorInput", "validInput");
  document.getElementById("errorFirst").textContent = "";
  document.getElementById("errorLast").textContent = "";
  document.getElementById("errorEmail").textContent = "";
  document.getElementById("errorQuantity").textContent = "";
  document.getElementById("errorBirthdate").textContent = "";
  document.getElementById("errorOption").textContent = "";
  document.getElementById("errorTerms").textContent = "";
}

//Close modal on click
closeBtn.addEventListener("click", function() {
  modalbg.style.display = "none";
  resetModal();
});

// Gestionnaire d'événement pour l'ouverture de la modal
document.querySelector(".modal-btn").addEventListener("click", function() {
  openModal();
});