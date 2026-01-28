import { signupFormValidation, signinFormValidation } from "./authPages.js";
import { recentTransactions } from "./dashboard/transactions.js";
import { balanceVisibility } from "./dashboard/balance.js";

// =============== AUTH PAGES FUNCTIONALITY =============== //
const signupPage = document.getElementById("signup-page");
const signinPage = document.getAnimations("signin-page");

if (signupPage) {
  signupFormValidation();
}

if (signinPage) {
  signinFormValidation();
}

// =============== SEARCH BAR EXPANSION =============== //
const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");

searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("active");
});

// =============== HAMBURGER FUNCTIONALITY =============== //
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

// =============== DROPDOWN FUNCTIONALITY =============== //
const settingsButton = document.querySelector(".settings");
const dropdown = document.querySelector(".dropdown");

settingsButton.addEventListener("click", (event) => {
  event.stopPropagation();
  dropdown.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove("active");
  }
});

// =============== BALANCE VISIBILITY =============== //
balanceVisibility();

// =============== TRANSACTIONS HISTORY =============== //
recentTransactions();

// =============== MODE TOGGLE FUNCTIONAILITY ================= //
const modeButton = document.getElementById("mode-toggle");

modeButton.addEventListener("click", () => {
  document.body.classList.toggle("light");
});
