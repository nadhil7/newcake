import React from "react";
import NavBar from "./components/Navbar";
import HeroSlider from "./components/Heroslider";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Shop from "./components/Shop";
import About from "./components/About";

export default function App() {
  return (
    <div className="font-sans bg-gradient-to-r from-pink-100 via-white to-pink-50 min-h-screen ">
      <NavBar />
      <HeroSlider />
      <About />
      {/* <CategoriesSlider /> */}
      <Shop />
      {/* <Team /> */}
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
