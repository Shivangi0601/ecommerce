// script.js
const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");

addToCartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Item added to cart!");
  });
});

function toggleNav() {
  const navbarMenu = document.getElementById("navbarSupportedContent");
  navbarMenu.classList.toggle("active");
}
