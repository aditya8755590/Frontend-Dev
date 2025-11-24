document.addEventListener("DOMContentLoaded", () => {
  const steps = Array.from(document.querySelectorAll(".step"));
  const backBtn = document.getElementById("backBtn");
  const nextBtn = document.getElementById("nextBtn");
  const form = document.getElementById("multiForm");
  const summaryBox = document.getElementById("summary");

  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  const summaryName = document.getElementById("summaryName");
  const summaryEmail = document.getElementById("summaryEmail");
  const summaryPassword = document.getElementById("summaryPassword");

  let currentStepIndex = 0;

  function showStep(index) {
    steps.forEach((step, i) => {
      step.classList.toggle("active", i === index);
    });
    backBtn.disabled = index === 0;
    nextBtn.textContent = index === steps.length - 1 ? "Finish" : "Next";
  }

  function validateCurrentStep() {
    const step = currentStepIndex + 1;
    let isValid = true;

    if (step === 1) {
      const value = nameInput.value.trim();
      if (!value) {
        nameError.textContent = "Name is required.";
        isValid = false;
      } else {
        nameError.textContent = "";
      }
    } else if (step === 2) {
      const value = emailInput.value.trim();
      if (!value || !value.includes("@")) {
        emailError.textContent = "Please enter a valid email.";
        isValid = false;
      } else {
        emailError.textContent = "";
      }
    } else if (step === 3) {
      const value = passwordInput.value;
      if (value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
      } else {
        passwordError.textContent = "";
      }
    }
    return isValid;
  }

  nextBtn.addEventListener("click", () => {
    if (!validateCurrentStep()) return;

    if (currentStepIndex < steps.length - 1) {
      currentStepIndex++;
      showStep(currentStepIndex);
    } else {
      // Completed all steps
      form.classList.add("hidden");
      summaryName.textContent = nameInput.value;
      summaryEmail.textContent = emailInput.value;
      summaryPassword.textContent = passwordInput.value;
      summaryBox.classList.remove("hidden");
    }
  });

  backBtn.addEventListener("click", () => {
    if (currentStepIndex > 0) {
      currentStepIndex--;
      showStep(currentStepIndex);
    }
  });

  showStep(currentStepIndex);
});
