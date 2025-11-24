document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.getElementById("searchBox");
  const tableRows = Array.from(
    document.querySelectorAll("#studentTable tbody tr")
  );
  const noResults = document.getElementById("noResults");

  function filterTable() {
    const query = searchBox.value.trim().toLowerCase();
    let visibleCount = 0;

    tableRows.forEach((row) => {
      const text = row.textContent.toLowerCase();
      const matches = text.includes(query);
      row.style.display = matches ? "" : "none";
      if (matches) visibleCount++;
    });

    if (visibleCount === 0) {
      noResults.classList.remove("hidden");
    } else {
      noResults.classList.add("hidden");
    }
  }

  searchBox.addEventListener("input", filterTable);
});
