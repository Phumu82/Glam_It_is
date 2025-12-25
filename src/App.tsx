import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Masterclass from "./pages/Masterclass";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* LOGO APPEARS ON ALL PAGES */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/masterclass" element={<Masterclass />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
