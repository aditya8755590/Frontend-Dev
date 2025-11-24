document.addEventListener("DOMContentLoaded", () => {
  const productInput = document.getElementById("productInput");
  const addProductBtn = document.getElementById("addProductBtn");
  const productList = document.getElementById("productList");

  let currentlyEditingSpan = null;

  function createProductItem(name) {
    const li = document.createElement("li");

    const nameSpan = document.createElement("span");
    nameSpan.textContent = name;
    nameSpan.classList.add("product-name");

    const btnGroup = document.createElement("div");
    btnGroup.classList.add("btn-group");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(deleteBtn);

    li.appendChild(nameSpan);
    li.appendChild(btnGroup);

    return li;
  }

  function addProduct() {
    const name = productInput.value.trim();
    if (!name) return;
    const item = createProductItem(name);
    productList.appendChild(item);
    productInput.value = "";
    productInput.focus();
  }

  addProductBtn.addEventListener("click", addProduct);
  productInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addProduct();
    }
  });

  productList.addEventListener("click", (e) => {
    const target = e.target;
    const li = target.closest("li");
    if (!li) return;

    if (target.classList.contains("delete-btn")) {
      li.remove();
    }

    if (target.classList.contains("edit-btn")) {
      startEditing(li);
      e.stopPropagation();
    }
  });

  function startEditing(li) {
    const span = li.querySelector(".product-name");
    if (!span) return;

    if (currentlyEditingSpan && currentlyEditingSpan !== span) {
      stopEditing();
    }

    span.contentEditable = "true";
    span.classList.add("editing");
    span.focus();

    // Place caret at end
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(span);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);

    currentlyEditingSpan = span;
  }

  function stopEditing() {
    if (!currentlyEditingSpan) return;
    currentlyEditingSpan.contentEditable = "false";
    currentlyEditingSpan.classList.remove("editing");
    currentlyEditingSpan = null;
  }

  document.addEventListener("click", (e) => {
    if (
      currentlyEditingSpan &&
      !currentlyEditingSpan.parentElement.contains(e.target)
    ) {
      stopEditing();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && currentlyEditingSpan) {
      e.preventDefault();
      stopEditing();
    }
  });
});
