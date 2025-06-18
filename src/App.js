import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Offers from "./components/Offers";
import Help from "./components/Help";
import Error from "./components/Error";
import Cart from "./components/cart";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import UserContext from "./utils/userContext";
import { useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  const [userName, setUserName] = React.useState("");

  useEffect(() => {
    const userData = {
      name: "Swathi",
    };
    setUserName(userData.name);
  }, []);
  return (
    <React.StrictMode>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUserName: userName }}>
          <div className="app">
            <Header />
            <Outlet />
          </div>
        </UserContext.Provider>
      </Provider>
    </React.StrictMode>
  );
};

// This effect runs once when the component mounts

const Grocery = lazy(() => import("./components/Grocery"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaraunts/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
