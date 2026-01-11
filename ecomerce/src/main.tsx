import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import { ShoppingCart } from "./components/shopCar.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <StrictMode>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<ShoppingCart />}></Route>
        </Routes>
      </StrictMode>
    </BrowserRouter>
  </QueryClientProvider>
);
