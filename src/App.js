import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Navbar, Home, Listing, FindDeal, Faq, ContactUs } from "./components/index";

function App() {

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/finddeal" element={<FindDeal />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
