const validate = () => {
  const namePattern = /^[A-Za-z]+$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).*$/;

  const fName = document.getElementById("fName");
  const errorName = document.getElementById("errorName");
  const nameValue = fName.value.trim();
  fName.classList.remove("is-invalid");
  errorName.style.display = "none";

  const fEmail = document.getElementById("fEmail");
  const errorEmail = document.getElementById("errorEmail");
  const emailValue = fEmail.value.trim();
  fEmail.classList.remove("is-invalid");
  errorEmail.style.display = "none";

  const fAdress = document.getElementById("fAddress");
  const errorAddress = document.getElementById("errorAddress");
  const addressValue = fAdress.value.trim();
  fAdress.classList.remove("is-invalid");
  errorAddress.style.display = "none";

  const fLastN = document.getElementById("fLastN");
  const errorLastN = document.getElementById("errorLastN");
  const lastNValue = fLastN.value.trim();
  fLastN.classList.remove("is-invalid");
  errorLastN.style.display = "none";

  const fPassword = document.getElementById("fPassword");
  const errorPassword = document.getElementById("errorPassword");
  const passwordValue = fPassword.value.trim();
  fPassword.classList.remove("is-invalid");
  errorPassword.style.display = "none";

  const fPhone = document.getElementById("fPhone");
  const errorPhone = document.getElementById("errorPhone");
  const phoneValue = fPhone.value.trim();
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
  if (addressValue === "" || addressValue.length < 3) {
    fAdress.classList.add("is-invalid");
    errorAddress.style.display = "block";
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
