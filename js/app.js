// LOAD STORAGE
if (localStorage.getItem("p2pData")) {
  Object.assign(DATA, JSON.parse(localStorage.getItem("p2pData")));
}

function saveData() {
  localStorage.setItem("p2pData", JSON.stringify(DATA));
}

// LOGIN
function login() {
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;

  if (u === "admin" && p === "123") {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("app").style.display = "block";
    loadPage("dashboard");
  } else {
    alert("Invalid login");
  }
}

function logout() {
  location.reload();
}

// NAVIGATION
function loadPage(page) {

  let html = "";

  if (page === "dashboard") {
    html = `
      <h2>Dashboard</h2>

      <div class="card">Requests: ${DATA.requests.length}</div>
      <div class="card">Orders: ${DATA.orders.length}</div>

      <canvas id="barChart"></canvas>
      <canvas id="pieChart"></canvas>
    `;

    document.getElementById("content").innerHTML = html;

    setTimeout(() => {

      new Chart(document.getElementById("barChart"), {
        type: "bar",
        data: {
          labels: ["Requests", "Orders", "Deliveries"],
          datasets: [{
            data: [
              DATA.requests.length,
              DATA.orders.length,
              DATA.deliveries.length
            ]
          }]
        }
      });

      new Chart(document.getElementById("pieChart"), {
        type: "pie",
        data: {
          labels: ["Paid", "Pending"],
          datasets: [{
            data: [1, 1]
          }]
        }
      });

    }, 100);

    return;
  }

  if (page === "requests") {
    html = `
      <h2>Requests</h2>
      <button onclick="addRequest()">+ Add</button>
    `;

    DATA.requests.forEach(r => {
      html += `
        <div class="card">
          ${r.item} (${r.qty})
          <span class="status ${r.status.toLowerCase()}">${r.status}</span>
          <br><br>
            <b>Progress:</b> 
            Request → Order → Delivery → Payment ✅
        </div>
      `;
    });
  }

  if (page === "orders") {
    html = "<h2>Orders</h2>";

    DATA.orders.forEach(o => {
      html += `
        <div class="card">
          ${o.item} linked to ${o.reqId}
        </div>
      `;
    });
  }

  if (page === "delivery") {
    html = "<h2>Delivery</h2>";

    DATA.deliveries.forEach(d => {
      html += `
        <div class="card">
          ${d.item} from ${d.orderId}
        </div>
      `;
    });
  }

  if (page === "billing") {
    html = "<h2>Billing</h2>";

    DATA.bills.forEach(b => {
      html += `
        <div class="card">
          ₹${b.amount} from ${b.deliveryId}
        </div>
      `;
    });
  }

  document.getElementById("content").innerHTML = html;
}

// ADD REQUEST FLOW
function addRequest() {
  let item = prompt("Enter item:");
  let qty = prompt("Enter quantity:");

  let id = "REQ" + (DATA.requests.length + 1);

  DATA.requests.push({ id, item, qty, status: "Approved" });

  // AUTO FLOW
  let orderId = "ORD" + DATA.orders.length;
  DATA.orders.push({ id: orderId, reqId: id, item, qty });

  let delId = "DEL" + DATA.deliveries.length;
  DATA.deliveries.push({ id: delId, orderId, item, received: qty });

  let billId = "BILL" + DATA.bills.length;
  DATA.bills.push({ id: billId, deliveryId: delId, amount: qty * 5000 });

  saveData();
  loadPage("requests");
}

function getProgress(status) {
  if (status === "Approved") {
    return "Request ✅ → Order → Delivery → Payment";
  }
  if (status === "Confirmed") {
    return "Request ✅ → Order ✅ → Delivery → Payment";
  }
  if (status === "Delivered") {
    return "Request ✅ → Order ✅ → Delivery ✅ → Payment";
  }
  if (status === "Paid") {
    return "Request ✅ → Order ✅ → Delivery ✅ → Payment ✅";
  }
  return "Request → Order → Delivery → Payment";
}