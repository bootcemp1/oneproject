import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NamanganInfo from "./components/NamanganInfo";
import TouristPlaces from "./components/TouristPlaces";
import UzbekistanTravelGuide from "./components/UzbekistanGuide";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage"; 
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<NamanganInfo />} />
          <Route path="/turistik-manzillar" element={<TouristPlaces />} />
          <Route path="/qollanma" element={<UzbekistanTravelGuide />} />
          <Route path="/biz-haqimizda" element={<AboutPage />} />
          <Route path="/biz-bilan-aloqa" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
