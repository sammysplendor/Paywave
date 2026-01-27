// ========== TRANSACTIONS MOCK DATA ========== //

export const transactionData = [
  {
    id: "txn_001",
    source: {
      id: "paypal",
      name: "PayPal",
      icon: "../assets/paypal-4.svg",
    },
    title: "PayPal",
    type: "Credit",
    category: "Transfer",
    amount: 2300000,
    arithsign: "+",
    status: "Successful",
    timestamp: "2026-01-19T19:20:00",
  },

  {
    id: "txn_002",
    source: {
      id: "spotify",
      name: "Spotify Premium",
      icon: "../assets/spotify-2.svg",
    },
    title: "Spotify Premium",
    type: "Debit",
    category: "Subscription",
    amount: 24906,
    arithsign: "-",
    status: "Successful",
    timestamp: "2026-01-18T19:09:40",
  },

  {
    id: "txn_003",
    source: {
      id: "gtbank",
      name: "GTBank",
      icon: "../assets/GTBank-logo.png",
    },
    title: "GTBank",
    type: "Credit",
    category: "Transfer",
    amount: 240250,
    arithsign: "+",
    status: "Successful",
    timestamp: "2026-01-10T15:20:00",
  },
];

// ========== USER MOCK DATA ========== //
export let userData = {};
