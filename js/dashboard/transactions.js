import { transactionData } from "../data.js";

// =============== RENDERING TRANSACTION HISTORY =============== //
export const recentTransactions = () => {
  const transactionList = document.querySelector(".transaction-list");

  let transactionsHTML = "";

  transactionData.forEach((transaction) => {
    let amountClass =
      transaction.arithsign === "+" ? "addition" : "subtraction";

    transactionsHTML += `
       <tr class="list-item">
            <td>
              <div>
                <img src="${transaction.source.icon}" alt="${transaction.source.name}" />
                <div class="detail">
                  <p class="name">${transaction.title} - ${transaction.type}</p>
                  <p class="timestamp">${transaction.timestamp}</p>
                </div> 
              </div>
            </td>

            <td class="other-details category">${transaction.category}</td>

            <td class="other-details ${amountClass}">${transaction.arithsign} ${transaction.amount}</td>

            <td class="other-details status">${transaction.status}</td>
        </tr>
      `;
  });

  transactionList.innerHTML = transactionsHTML;
};

// =============== CLIENT-SIDE TRANSACTION SEARCH SYSTEM =============== //

export const transactionSearch = () => {
  // ========== The search button functionality ========== //
  const searchBtn = document.getElementById("search-btn");
  const transactionSearchInput = document.querySelector(
    ".transaction-search-input",
  );

  // -- When button is clicked search input appears
  searchBtn.addEventListener("click", () => {
    transactionSearchInput.classList.toggle("active");
  });

  // ========== Search result rendering ========== //
  transactionSearchInput.addEventListener("input", () => {
    const result = document.querySelector(".transaction-list"); // Grab the container of the transaction list
    const input = transactionSearchInput.value.toLowerCase();

    const searchResult = transactionData.filter((transaction) => {
      return (
        // fetched from the data objects
        transaction.source.id.toLowerCase().includes(input) ||
        transaction.title.toLowerCase().includes(input) ||
        transaction.type.toLowerCase().includes(input) ||
        transaction.amount.toString().includes(input)
      );
    });

    result.innerHTML = ""; // Grab the transactions html structure

    searchResult.forEach((transaction) => {
      let amountClass =
        transaction.arithsign === "+" ? "addition" : "subtraction";

      // Update the html
      result.innerHTML += ` 
      <tr class="list-item">
            <td>
              <div>
                <img src="${transaction.source.icon}" alt="${transaction.source.name}" />
                <div class="detail">
                  <p class="name">${transaction.title} - ${transaction.type}</p>
                  <p class="timestamp">${transaction.timestamp}</p>
                </div> 
              </div>
            </td>

            <td class="other-details category">${transaction.category}</td>

            <td class="other-details ${amountClass}">${transaction.arithsign} ${transaction.amount}</td>

            <td class="other-details status">${transaction.status}</td>
        </tr>
      `;
    });
  });
};
