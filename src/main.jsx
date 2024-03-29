import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx"
import {
  createBrowserRouter,

  RouterProvider,
} from "react-router-dom";

const routerPath = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routerPath} />
  </React.StrictMode>
);
