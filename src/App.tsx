import React from "react";
import Navbar from "./components/Nav/nav";
import HomePage from "./components/firstComp/firstcomp";
import "./index.css";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;
