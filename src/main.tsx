import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Dashboard } from "./routes/admin";
import {
  NewsPage,
  HomePage,
  PlanPage,
  StaffPage,
  AboutPage,
} from "~/routes/user";

import "./styles/global.css";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/news",
    element: <NewsPage />,
  },
  {
    path: "/plan",
    element: <PlanPage />,
  },
  {
    path: "/staff",
    element: <StaffPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
