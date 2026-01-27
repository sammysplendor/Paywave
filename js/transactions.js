import { transactionData } from "./data.js";

export const recentTransactions = () => {
  const transactionList = document.querySelector(".transaction-list");

  let transactionsHTML = "";

  transactionData.forEach((transaction) => {
    let amountClass = "";
    transaction.arithsign === "+" ? "addition" : "subtraction";

    transactionsHTML += `
       <tr class="list-item">
                <td>
                  <div>
                    <img src="${transaction.source.icon}" alt="${transaction.source.name}" />
                    <div class="detail">
                      <p class="name">${transaction.title}</p>
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
  console.log(transactionList);
};
