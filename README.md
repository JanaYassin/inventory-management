## 📦 Inventory Management System

A full-stack inventory management application built with **React.js** (frontend) and **Node.js + Express** (backend). This app allows users to add, edit, delete, and search inventory items — with a bonus rule-based AI feature that suggests categories based on item names.

---

## 🚀 Features

* Add, edit, and delete inventory items
* Real-time search by name, category, or status
* Category and status auto-filled using rule-based AI
* Low-stock warning indicator
* Modern responsive UI with clean design
* In-memory data storage (no database required)

---

## 🛠️ Tech Stack

**Frontend**

* React.js (functional components + hooks)
* CSS (custom styling)

**Backend**

* Node.js
* Express.js
* CORS and Body-Parser

---

## 📂 Project Structure

```
inventory-system/
├── client/      # React frontend
│   └── src/
│       ├── components/
│       │   ├── ItemForm.js
│       │   └── ItemList.js
│       └── App.js
├── server/      # Node.js + Express backend
│   └── index.js
├── .gitignore
└── README.md
```

---

## 🧪 Getting Started

### 🔧 Backend Setup

```bash
cd server
npm install
node index.js
```

Backend will run on:
📍 `http://localhost:5000`

---

### 💻 Frontend Setup

```bash
cd client
npm install
npm start
```

Frontend will run on:
📍 `http://localhost:3000`

---

## 🧠 Bonus: AI-Based Category Suggestion

This feature auto-fills the category and status when the item name includes certain keywords (e.g., typing "milk" sets category to "Grocery").
It’s implemented with simple rule-based logic inside `ItemForm.js`.

