import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./src/components/Header";
import About from "./src/components/About";
import Restaurants from "./src/components/Restaurants";
import Footer from "./src/components/Footer";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMaenu from "./src/components/RestaurantMenu";
import store from "./src/util/store";
import UserContext from "./src/context/UserContext";
import { Provider } from "react-redux";
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Nandu",
    email: "nanduksathyan@gmail.com",
  });
  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Restaurants />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMaenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
