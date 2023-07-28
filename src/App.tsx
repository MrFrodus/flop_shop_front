import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.tsx";
import NotFound from "./components/NotFound.tsx";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
