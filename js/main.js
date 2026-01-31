import { initSignup, initSignin } from "./authPages.js";
import { protectPage } from "./authGuard.js";
import {
  recentTransactions,
  transactionSearch,
} from "./dashboard/transactions.js";
import { accountBalanceDisplay } from "./dashboard/balance.js";
import { balanceVisibility } from "./dashboard/balance.js";

// =============== AUTH PAGES FUNCTIONALITY =============== //
const signupPage = document.getElementById("signup-page");
const signinPage = document.getElementById("signin-page");

if (signupPage) {
  initSignup();
}

if (signinPage) {
  initSignin();
}

// =============== PROTECTED PAGE =============== //
const dashboardPage = document.getElementById("dashboard-page");

if (dashboardPage) {
  protectPage();

  initSearchBar();

  initHamburger();

  initDropdown();

  // =============== ACCOUNT BALANCE =============== //
  balanceVisibility();

  accountBalanceDisplay();
  // ==================================================== //

  // =============== TRANSACTIONS HISTORY =============== //
  recentTransactions();

  transactionSearch();
  // ==================================================== //
  initModeToggle();

  initLogout();
}

// =============== HAMBURGER FUNCTIONALITY =============== //
function initHamburger() {
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
}

// =============== DROPDOWN FUNCTIONALITY =============== //
function initDropdown() {
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
}

// =============== SEARCH BAR EXPANSION =============== //
function initSearchBar() {
  const searchIcon = document.querySelector(".search-icon");
  const searchInput = document.querySelector(".search-input");

  searchIcon.addEventListener("click", () => {
    searchInput.classList.toggle("active");
  });
}

// =============== MODE TOGGLE FUNCTIONAILITY ================= //
function initModeToggle() {
  const modeButton = document.getElementById("mode-toggle");

  modeButton.addEventListener("click", () => {
    document.body.classList.toggle("light");
  });
}

// =============== LOGOUT =============== //
function initLogout() {
  const logoutButton = document.getElementById("logout-btn");

  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");

    setTimeout(() => {
      window.location.replace("../pages/signin.html");
    }, 1000);
  });
}
