main();

function main() {
  addEventforModal();
}

function addEventforModal() {
  const modalBtn = document.querySelectorAll(".btn-signup");
  const closeBtn = document.querySelector(".close");

  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

  closeBtn.addEventListener("click", function () {
    closeModal();
  });
}

function launchModal() {
  const modalbg = document.querySelector(".bground");
  modalbg.style.display = "block";
  resetModal();
}

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Fonction de réinitialisation de la modal
function resetModal() {
  VALID_FORM = {
    first: false,
    last: false,
    email: false,
    birthdate: false,
    quantity: false,
    location: false,
    terms: false,
  };
  getField("confirmModal").style.display = "none";
  document.querySelector("form").style.display = "block";
  getField("submitBtn").disabled = true;
  getField("submitBtn").classList.remove("btn-submit");
  
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
  document
    .getElementById("quantity")
    .classList.remove("errorInput", "validInput");
  document
    .getElementById("birthdate")
    .classList.remove("errorInput", "validInput");
  document.getElementById("errorFirst").textContent = "";
  document.getElementById("errorLast").textContent = "";
  document.getElementById("errorEmail").textContent = "";
  document.getElementById("errorQuantity").textContent = "";
  document.getElementById("errorBirthdate").textContent = "";
  document.getElementById("errorOption").textContent = "";
  document.getElementById("errorTerms").textContent = "";
}

function closeModal() {
  const modalbg = document.querySelector(".bground");
  modalbg.style.display = "none";
  resetModal();
}