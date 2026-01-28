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
  userData.balance = 10182000;

  const totalBalance = document.querySelector(".amount");
  const currentDateTime = document.getElementById("current-date-time");

  totalBalance.innerText = `₦${userData.balance.toLocaleString("en-NG")}`;

  function updateDateTime() {
    const now = new Date();

    const currentDate = now.toLocaleDateString("en-NG", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const currentTime = now.toLocaleTimeString("en-NG", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    currentDateTime.innerText = `${currentDate} | ${currentTime}`;
  }

  updateDateTime();
};
