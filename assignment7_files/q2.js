document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("message");
  const counter = document.getElementById("counter");
  const resetBtn = document.getElementById("resetBtn");
  const MAX = 100;

  function updateCounter() {
    const remaining = MAX - textarea.value.length;
    counter.textContent = "Remaining: " + Math.max(remaining, 0);
    counter.classList.remove("yellow", "red");

    if (remaining <= 20 && remaining > 0) {
      counter.classList.add("yellow");
    } else if (remaining <= 0) {
      counter.classList.add("red");
    }
  }

  textarea.addEventListener("input", updateCounter);

  textarea.addEventListener("keydown", (e) => {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Tab",
      "Home",
      "End"
    ];

    const isAllowed = allowedKeys.includes(e.key);

    if (
      textarea.value.length >= MAX &&
      !isAllowed &&
      // allow replacing selected text
      textarea.selectionStart === textarea.selectionEnd
    ) {
      e.preventDefault();
    }
  });

  resetBtn.addEventListener("click", () => {
    textarea.value = "";
    updateCounter();
    textarea.focus();
  });

  updateCounter();
});
