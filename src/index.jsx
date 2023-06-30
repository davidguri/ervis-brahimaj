import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Root from "./routes/Root";
import Treatments from "./routes/Treatments";
import About from "./routes/About";
import Faq from "./routes/Faq";

import ErrorPage from "./error-page";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/faq",
        element: <Faq />,
    },
    {
        path: "/treatments",
        element: <Treatments />,
        children: [/* This is where all the diff types of treatments go. */]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
