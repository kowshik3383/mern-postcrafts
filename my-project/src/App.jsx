import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Hero from "./components/Hero";
import FeatureSection from "./FeatureSection";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/" element={
              <>
                <Hero />
                <FeatureSection />
                <About />
                <Pricing />
                <Contact />
              </>
            } />
            
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
