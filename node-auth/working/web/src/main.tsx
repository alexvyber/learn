import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

import { Routes, Route, useParams } from "react-router-dom"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Verify } from "./Verify"
import { Reset } from "./Reset"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/profile",
    element: <h1>Profile</h1>
  },
  {
    path: "/verify/:email/:verificationToken",
    element: <Verify />
  },
  {
    path: "/reset/:email/:timestamps/:token",
    element: <Reset />
  }
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
