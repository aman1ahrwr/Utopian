import React, { useState } from "react";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import Packages from "./components/Packages";
import Projects from "./components/Projects";
import { SliderData } from "./data/SliderData";
import { SliderDataTwo } from "./data/SliderData";
import { CardTwoData } from "./data/InfoData";
import { CardOneData } from "./data/InfoData";
import DropDown from "./components/DropDown";
import Info from "./components/Info";
import Info2 from "./components/Info2";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import ScrollTop from './components/ScrollTop';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <ScrollTop />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" element={
          <>
          <Packages slides={SliderData} />
          <Info2 {...CardOneData} />
          <Info {...CardTwoData} />
          <Projects slides={SliderDataTwo} />
          <Contact />
          </>
        } />

        <Route path="/about" element={
          <>
          <Info2 {...CardOneData} />
          <Info {...CardTwoData} />
          </>
        }/>

        <Route path="/projects" element={<Projects slides={SliderDataTwo} />} />

        <Route path="/packages" element={<Packages slides={SliderData} />}/>

        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
