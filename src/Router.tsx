import { Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout/index.js";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}
