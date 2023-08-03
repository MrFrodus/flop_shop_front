import { Route, HashRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import AddProduct from "./components/AddProduct";
import Categories from "./components/Categories";
import Nav from "./components/Nav";
import Account from "./components/Account";
import Cart from "./components/Cart";

export function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
