import { Route, HashRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import AddProduct from "./components/AddProduct";
import Categories from "./components/Categories";
import Nav from "./components/Nav";
import Account from "./components/Account";
import Cart from "./components/Cart";
import Register from "./components/Register";
import SignIn from "./components/SignIn";

export const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
        <Route
          path="/add"
          element={<AddProduct />}
        />
        <Route
          path="/categories"
          element={<Categories />}
        />
        <Route
          path="/account"
          element={<Account />}
        />
        <Route
          path="/cart"
          element={<Cart />}
        />
        <Route
          path="/signIn"
          element={<SignIn />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
      </Routes>
    </div>
  );
};

export const WrappedApp = () => {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
};
