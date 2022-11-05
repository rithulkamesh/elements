import React from "react";
import Masthead from "../components/masthead";
import Navbar from "../components/Navbar";

const App: React.FC = () => {
  return (
    <div className="Home">
      <Navbar />
      <Masthead />
      <Bands />
    </div>
  )
}

export default App;
