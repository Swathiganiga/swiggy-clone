# swiggy-clone - Food Order App

A React-based food ordering application that allows users to browse restaurants, view menus, add items to the cart, and place orders. This project demonstrates the use of modern React features such as hooks, context, and Redux for state management.

---

## Features

- **Restaurant Listing:** Browse restaurants with detailed information.
- **Search Functionality:** Search for restaurants by name.
- **Filter Options:** Filter restaurants based on ratings and cuisine.
- **Menu Display:** View restaurant menus with item details.
- **Cart Management:** Add items to the cart and view the total.
- **Offline Support:** Displays a message when the user is offline.
- **Promoted Restaurants:** Highlight promoted restaurants with a label.
- **Responsive Design:** Optimized for desktop and mobile devices.

---

## Tech Stack

- **Frontend:** React, Redux, React Router
- **Styling:** CSS, Material-UI
- **Backend:** Mock API (Swiggy API simulation)
- **Build Tool:** Parcel
- **State Management:** React Context API, Redux

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/username/food-order-app.git
2. Navigate to the project directory: cd food-order-app
3. Install dependencies: npm install
4. Start the development server: npm start

Folder Structure
   food-order-app/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Body.js
│   │   ├── RestaurantMenu.js
│   │   ├── Cart.js
│   │   └── ItemList.js
│   ├── utils/
│   │   ├── constants.js
│   │   ├── userContext.js
│   │   └── useOnlineStatus.js
│   ├── icons/
│   │   └── Star.svg
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package.json
└── README.md

**Scripts:**
npm start: Start the development server.
npm run build: Build the project for production.
npm test: Run tests.

**How to Use::**
Open the application in your browser.
Browse restaurants and view their menus.
Add items to the cart and proceed to checkout.
Enjoy your food!
