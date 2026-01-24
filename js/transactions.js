// ========== TRANSACTIONS MOCK DATA ========== //

export const transactionData = [
  {
    id: "txn_001",
    source: {
      id: "paypal",
      name: "PayPal",
      icon: "../assets/paypal-4.svg",
    },
    title: "PayPal - Received",
    type: "credit",
    category: "transfer",
    amount: 2300000,
    status: "successful",
    timestamp: "2026-01-19T19:20:00",
  },

  {
    id: "txn_002",
    source: {
      id: "spotify",
      name: "Spotify",
      icon: "../assets/spotify-2.svg",
    },
    title: "Spotify Premium",
    type: "debit",
    category: "subscription",
    amount: 24906,
    status: "successful",
    timestamp: "2026-01-18T19:20:00",
  },

  {
    id: "txn_003",
    source: {
      id: "gtbank",
      name: "GTBank",
      icon: "../assets/GTBank-logo.png",
    },
    title: "GTBank - Received",
    type: "credit",
    category: "transfer",
    amount: 240250,
    status: "successful",
    timestamp: "2026-01-10T15:20:00",
  },
];
