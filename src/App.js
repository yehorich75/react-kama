import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Surf from "./Components/Surf/Surf";
import Travel from "./Components/Travel/Travel";
import Sleep from "./Components/Sleep/Sleep";
import Shop from "./Components/Shop/Shop";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container">
          <Surf />
          <Travel />
          <Sleep />
          <Shop />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
