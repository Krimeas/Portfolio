import React from "react";
import Project from "./components/Project";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Project />
      <Footer />
    </div>
  );
}

export default App;

