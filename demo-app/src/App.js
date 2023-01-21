import React from "react";
import Header from "./Header";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";
import { Route, Routes } from "react-router-dom"
  
function App() {
  return (
  
   // Using the newly created Header 
   // component in this main component
   <Header/>
  );
}
export default App;