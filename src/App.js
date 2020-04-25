import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Quote from "./component/Quote";
import NasaPhoto from "./component/NasaPhoto";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />

        <div className="content">
          <Route component={NasaPhoto} path="/" exact />
          <Route component={Quote} path="/quote" />
        </div>
      </div>
    </BrowserRouter>
  );
}
