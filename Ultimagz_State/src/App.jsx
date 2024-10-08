import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage.jsx";
import QRpage from "./Pages/QRpage.jsx";

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/QR" element={<QRpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
