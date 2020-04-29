import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
 
  return (
    <div className="home">
      <NavLink className="home-link" to="/nasaphoto" exact >See into the stars!</NavLink>
    </div>
  );
}
