document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userForm");
  const nameField = document.getElementById("nameField");
  const emailField = document.getElementById("emailField");
  const passwordField = document.getElementById("passwordField");

  const nameError = document.getElementById("nameFieldError");
  const emailError = document.getElementById("emailFieldError");
  const passwordError = document.getElementById("passwordFieldError");
  const successMessage = document.getElementById("successMessage");

  function validateName() {
    const value = nameField.value.trim();
    if (!value) {
      nameError.textContent = "Name is required.";
      return false;
    }
    nameError.textContent = "";
    return true;
  }

  function validateEmail() {
    const value = emailField.value.trim();
    if (!value || !value.includes("@")) {
      emailError.textContent = "Please enter a valid email with @.";
      return false;
    }
    emailError.textContent = "";
    return true;
  }

  function validatePassword() {
    const value = passwordField.value;
    if (value.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters.";
      return false;
    }
    passwordError.textContent = "";
    return true;
  }

  function validateForm() {
    const validName = validateName();
    const validEmail = validateEmail();
    const validPassword = validatePassword();
    return validName && validEmail && validPassword;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // block default submission
    successMessage.textContent = "";

    if (validateForm()) {
      successMessage.textContent = "Form Submitted Successfully!";
      // You could also reset the form if needed:
      // form.reset();
    }
  });

  nameField.addEventListener("input", () => {
    validateName();
    successMessage.textContent = "";
  });

  emailField.addEventListener("input", () => {
    validateEmail();
    successMessage.textContent = "";
  });

  passwordField.addEventListener("input", () => {
    validatePassword();
    successMessage.textContent = "";
  });
});
