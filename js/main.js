import { signupFormValidation } from "./authPages.js";

signupFormValidation();

// ========== SEARCH BAR EXPANSION ========== //
const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");

searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("active");
});

// ========== HAMBURGER FUNCTIONALITY ========== //
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar-nav");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  if (
    !event.target.closest(".sidebar-nav") &&
    !event.target.closest(".hamburger")
  ) {
    sidebar.classList.remove("active");
  }
});
