import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HamburgerMenu from "./components/HamburgerMenu";

function App() {
  return (
    <div className="mx-[2.5rem] md:mx-32">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
