# SAP Fiori — Procure-to-Pay (P2P) Hostel Procurement System

## Project Overview

This project is a web-based simulation of the **Procure-to-Pay (P2P)** business process implemented using a SAP Fiori-style interface. It demonstrates how an organization manages procurement activities from material request to final payment.

The system is designed for **KIIT University Hostel Infrastructure Management**, where items such as beds, fans, and networking equipment are procured for a new hostel facility.

---

## Objective

To design and develop a complete working application that simulates the **end-to-end P2P lifecycle**, including:

* Material Request creation
* Purchase Order generation
* Goods Delivery tracking
* Invoice and Payment processing

---

## P2P Process Flow

Material Request → Purchase Order → Goods Delivery → Invoice → Payment

---

## Key Features

### Authentication

* Simple login system (Username: `admin`, Password: `123`)
* Ensures basic user access control

### Dashboard

* Displays key metrics (Requests, Orders, Deliveries)
* Interactive charts using Chart.js (Bar & Pie)

### Material Requests

* View all requests
* Add new requests dynamically
* Search/filter functionality

###  Orders

* Automatically generated from approved requests
* Linked with requisitions

###  Delivery Tracking

* Tracks goods received against orders
* Maintains delivery status

###  Billing & Payment

* Invoice generation linked to delivery
* Payment status tracking (Paid / Pending)

###  End-to-End Integration

* Complete linkage:

  * Request → Order → Delivery → Billing
* Automatic flow generation

###  Data Persistence

* Uses browser **localStorage**
* Data remains saved after refresh

---

##  Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript
* **UI Design:** SAP Fiori-inspired layout
* **Charts:** Chart.js
* **Storage:** Browser Local Storage

---

##  Project Structure

```
p2p-hostel-project/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   └── data.js
└── README.md
```

---

## How to Run the Project

1. Download or clone the repository
2. Extract the ZIP (if downloaded)
3. Open `index.html` in any modern browser
4. Login using:

   * Username: `admin`
   * Password: `123`

---

## Unique Features

* End-to-end P2P lifecycle simulation
* Automatic process linking (PR → PO → GR → Invoice)
* Interactive dashboard with charts
* Dynamic request creation
* Persistent data using localStorage
* Clean and simple SAP Fiori-like UI

---

## Future Enhancements

* Backend integration with database (MySQL / Firebase)
* Role-based authentication (Admin, Manager, User)
* Real SAP OData integration
* Mobile responsive design
* Advanced reporting and analytics

---

## Author

**Name:** Bhargab Dutta
**Roll Number: **2330081
**Course:** SAP Fiori Developer — Capstone Project
**Institution:** KIIT University

---

## Submission

Final Capstone Project Submission | April 2026

---
