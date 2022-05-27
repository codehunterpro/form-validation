const submit = document.querySelector(".btn-submit");
const form = document.querySelector(".data-form");
const formInfoText = document.querySelector(".info-text");
const formInfo = document.querySelector(".form-info");
const passwordEl = document.querySelector(".value-password");
const confirmPasswordEl = document.querySelector(".value-confirm-pass");
const loader = document.querySelector(".loader-div");

let isValid = false;
let passwordMatch = false;

function validForm() {
  isValid = form.checkValidity();

  if (!isValid) {
    formInfoText.textContent = "Correctly Fill The Form";
    formInfo.style.border = "1px solid red";
    formInfo.style.color = "red";
  }

  if (passwordEl.value === confirmPasswordEl.value) {
    passwordMatch = true;
    passwordEl.style.borderColor = "green";
    confirmPasswordEl.style.borderColor = "green";
  } else {
    passwordMatch = false;
    passwordEl.style.borderColor = "red";
    confirmPasswordEl.style.borderColor = "red";
    formInfoText.textContent = "Make Sure Your Password Match!";
    formInfo.style.border = "1px solid red";
    formInfo.style.color = "red";
  }
}

function getStoredData() {
  let user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };

  return user;
}

function loaderOff() {
  const loaderOff = setTimeout(() => {
    loader.hidden = true;
    if (isValid && passwordMatch) {
      formInfoText.textContent = "Successfully Registered";
      formInfo.style.border = "1px solid green";
      formInfo.style.color = "green";
    }
  }, 2000);
  
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // validate form
  validForm();
  // get storing Data
  if (isValid && passwordMatch) {
    console.log(getStoredData());
    loader.hidden = false;
    loaderOff();
  }

});
