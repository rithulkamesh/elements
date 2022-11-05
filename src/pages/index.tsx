import React from "react";
import {
  Bands,
  Footer,
  Locations,
  Masthead,
  Navbar,
  Tickets,
} from "../sections";

const App: React.FC = () => {
  return (
    <div className="Home">
      <Navbar />
      <Masthead />
      <Bands />
      <Locations />
      <Tickets />
      <Footer />
    </div>
  );
};

export default App;
