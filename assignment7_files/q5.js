document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll(".gallery img");
  const modalOverlay = document.getElementById("modalOverlay");
  const modalContent = document.getElementById("modalContent");
  const modalImage = document.getElementById("modalImage");

  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      const fullSrc = img.getAttribute("data-full") || img.src;
      modalImage.src = fullSrc;
      modalOverlay.classList.remove("hidden");
    });
  });

  modalOverlay.addEventListener("click", () => {
    modalOverlay.classList.add("hidden");
  });

  modalContent.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent closing when clicking inside modal
  });
});
