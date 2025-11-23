// Q6 – E-Commerce Dashboard: Product Card Fetcher
// Run with: node que6.js  (Node 18+ has fetch built-in)
// or in browser console (recommended for optional DOM part).

const API_URL = "https://fakestoreapi.com/products";

// Using async/await
async function fetchProducts() {
  try {
    console.log("Loading products from Fake Store API...");
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Network response was not ok: " + response.status);
    }

    const products = await response.json();

    products.forEach((product) => {
      console.log("Product:", product.title);
      console.log("Price: $" + product.price);
      console.log("Image:", product.image);
      console.log("---------------");
    });

    // Bonus (Optional): Create HTML product cards (only works in browser)
    if (typeof document !== "undefined") {
      const container = document.createElement("div");
      container.style.display = "grid";
      container.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";
      container.style.gap = "16px";
      container.style.padding = "16px";

      products.forEach((product) => {
        const card = document.createElement("div");
        card.style.border = "1px solid #ddd";
        card.style.borderRadius = "8px";
        card.style.padding = "8px";
        card.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.title;
        img.style.width = "100%";
        img.style.height = "180px";
        img.style.objectFit = "contain";

        const title = document.createElement("h3");
        title.textContent = product.title;
        title.style.fontSize = "14px";

        const price = document.createElement("p");
        price.textContent = "Price: $" + product.price;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price);
        container.appendChild(card);
      });

      document.body.appendChild(container);
    }
  } catch (error) {
    console.error("Failed to load products. Please try again.");
    console.error("Reason:", error.message);
  }
}

fetchProducts();
