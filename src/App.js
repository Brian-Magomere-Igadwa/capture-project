import React from "react";
import GlobalStyle from "./components/GlobalStyled";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<AboutUs />} />

        <Route path="/work" element={<OurWork />} />

        <Route path="/work/:id" element={<MovieDetail />} />

        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default App;
