document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById("dropdown");
  const dropdownBtn = document.getElementById("dropdownBtn");
  const dropdownList = document.getElementById("dropdownList");

  function toggleDropdown() {
    dropdownList.classList.toggle("hidden");
  }

  function closeDropdown() {
    dropdownList.classList.add("hidden");
  }

  dropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleDropdown();
  });

  dropdownList.addEventListener("click", (e) => {
    const option = e.target.closest(".option");
    if (!option) return;
    dropdownBtn.textContent = option.textContent;
    closeDropdown();
  });

  // Use capturing phase for closing mechanism
  document.addEventListener(
    "click",
    (e) => {
      if (!dropdown.contains(e.target)) {
        closeDropdown();
      }
    },
    true // capturing
  );
});
