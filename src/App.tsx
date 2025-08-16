import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import OfflineBanner from "./components/OfflineBanner";
import Home from "./pages/Home";
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <OfflineBanner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
