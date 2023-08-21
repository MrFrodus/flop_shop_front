import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import {
  Home,
  NotFound,
  AddProduct,
  Nav,
  Account,
  Cart,
  Register,
  SignIn,
  ProtectedRoute,
  CategoryProducts,
  SearchProducts,
  ErrorFallback,
} from "./components/index";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          <Nav />
          <Routes>
            <Route
              path="/register"
              element={<Register />}
            />
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
              element={(
                <ProtectedRoute>
                  <AddProduct />
                </ProtectedRoute>
              )}
            />
            <Route
              path="/account"
              element={(
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              )}
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
              path="/:category/:subcategory"
              element={<CategoryProducts />}
            />
            <Route
              path="/search"
              element={<SearchProducts />}
            />
          </Routes>
        </QueryClientProvider>
      </ErrorBoundary>
    </div>
  );
};

export default App;
