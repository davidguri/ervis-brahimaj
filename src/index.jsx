import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Root from "./routes/Root";
import Treatments from "./routes/Treatments";
import Faq from "./routes/Faq";
import TreatmentPage from "./routes/TreatmentPage";

import ErrorPage from "./error-page";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/treatments",
    element: <Treatments />,
    children: [
      {
        path: "/treatments/:id",
        element: <TreatmentPage />,
      },
    ],
  },
  {
    path: "/treatments/page",
    element: <TreatmentPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
