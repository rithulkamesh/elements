import React from "react";
import { Bands } from "../components/Bands";
import Footer from "../components/footer";
import Masthead from "../components/Masthead";
import Navbar from "../components/Navbar";

const App: React.FC = () => {
  return (
    <div className="Home">
      <Navbar />
      <Masthead />
      <Bands />
      <Footer />
    </div>
  );
};

export default App;
