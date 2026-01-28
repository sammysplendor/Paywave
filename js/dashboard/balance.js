import { userData } from "../data.js";

// =============== BALANCE VISIBILITY =============== //
export const balanceVisibility = () => {
  const visibilityIcon = document.querySelector(".visibility-icon-container");
  const hideIcon = document.querySelector(".fa-eye-slash");
  const showIcon = document.querySelector(".fa-eye");
  const amountDisplayed = document.getElementById("amount-seen");
  const amountHidden = document.getElementById("amount-hidden");

  visibilityIcon.addEventListener("click", () => {
    hideIcon.classList.toggle("active");
    showIcon.classList.toggle("active");

    amountDisplayed.classList.toggle("active");
    amountHidden.classList.toggle("active");
  });
};

// ============ FETCH & DISPLAY OF MOCK ACCOUNT BALANCE ============ //
export const accountBalanceDisplay = () => {
  userData.push({
    userFullName: "Sammy Splendor",
    balance: 10182000,
  });
};
