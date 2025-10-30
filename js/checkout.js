const validate = () => {
  const namePattern = /^[A-Za-z]+$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).*$/;

  let fName = document.getElementById("fName");
  let errorName = document.getElementById("errorName");
  let nameValue = fName.value.trim();
  fName.classList.remove("is-invalid");
  errorName.style.display = "none";

  let fEmail = document.getElementById("fEmail");
  let errorEmail = document.getElementById("errorEmail");
  let emailValue = fEmail.value.trim();
  fEmail.classList.remove("is-invalid");
  errorEmail.style.display = "none";

  let fAdress = document.getElementById("fAddress");
  let errorAddress = document.getElementById("errorAddress");
  let addressValue = fAdress.value.trim();
  fAdress.classList.remove("is-invalid");
  errorAddress.style.display = "none";

  let fLastN = document.getElementById("fLastN");
  let errorLastN = document.getElementById("errorLastN");
  let lastNValue = fLastN.value.trim();
  fLastN.classList.remove("is-invalid");
  errorLastN.style.display = "none";

  let fPassword = document.getElementById("fPassword");
  let errorPassword = document.getElementById("errorPassword");
  let passwordValue = fPassword.value.trim();
  fPassword.classList.remove("is-invalid");
  errorPassword.style.display = "none";

  let fPhone = document.getElementById("fPhone");
  let errorPhone = document.getElementById("errorPhone");
  let phoneValue = fPhone.value.trim();
  fPhone.classList.remove("is-invalid");
  errorPhone.style.display = "none";

  let isValid = true;

  if (
    nameValue === "" ||
    nameValue.length < 3 ||
    !namePattern.test(nameValue)
  ) {
    fName.classList.add("is-invalid");
    errorName.style.display = "block";
    isValid = false;
  }
  if (emailValue === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    fEmail.classList.add("is-invalid");
    errorEmail.style.display = "block";
    isValid = false;
  }
  if (addressValue === "" || addressValue.length < 3) {
    fAdress.classList.add("is-invalid");
    errorAddress.style.display = "block";
    isValid = false;
  }
  if (
    lastNValue === "" ||
    lastNValue.length < 3 ||
    !namePattern.test(lastNValue)
  ) {
    fLastN.classList.add("is-invalid");
    errorLastN.style.display = "block";
    isValid = false;
  }
  if (passwordValue === "" || passwordValue.length < 3 || !passwordRegex.test(passwordValue)) {
    fPassword.classList.add("is-invalid");
    errorPassword.style.display = "block";
    isValid = false;
  }
  if (phoneValue === "" || !/^\d{9}$/.test(phoneValue)) {
    fPhone.classList.add("is-invalid");
    errorPhone.style.display = "block";
    isValid = false;
  }

  return isValid;
};
