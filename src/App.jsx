import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage"; // Your landing page component
import PetGallery from "./components/Petgallery"; // Your existing PetGallery component
import Recipe from "./components/Recipe";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/petgallery" element={<PetGallery />} />
        <Route path="/recipes" element={<Recipe />} />
      </Routes>
    </Router>
  );
};

export default App;
