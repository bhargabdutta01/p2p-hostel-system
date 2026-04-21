const DATA = {
  requests: [
    { id: "REQ1", item: "Bed", qty: 200, status: "Approved" }
  ],

  orders: [
    { id: "ORD1", reqId: "REQ1", item: "Bed", qty: 200, status: "Confirmed" }
  ],

  deliveries: [
    { id: "DEL1", orderId: "ORD1", item: "Bed", received: 200, status: "Delivered" }
  ],

  bills: [
    { id: "BILL1", deliveryId: "DEL1", amount: 1000000, status: "Paid" }
  ]
};