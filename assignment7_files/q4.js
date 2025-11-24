document.addEventListener("DOMContentLoaded", () => {
  function setTheme(theme) {
    document.body.setAttribute("class", "theme-" + theme);
    document.body.setAttribute("data-theme", theme);
  }

  document.querySelectorAll("[data-theme-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const theme = btn.getAttribute("data-theme-btn");
      setTheme(theme);
    });
  });
});
