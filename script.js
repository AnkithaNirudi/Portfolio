// Adds shadow to navbar on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("header");
  if (window.scrollY > 30) {
    nav.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.2)";
  } else {
    nav.style.boxShadow = "none";
  }
});
