import React from "react";
import { Bands } from "../sections/Bands";
import Footer from "../components/footer";
import Masthead from "../sections/Masthead";
import Navbar from "../components/Navbar";
import Tickets from "../components/tickets";

const App: React.FC = () => {
  return (
    <div className="Home">
      <Navbar />
      <Masthead />
      <Bands />
      <Tickets />
      <Footer />
    </div>
  );
};

export default App;
