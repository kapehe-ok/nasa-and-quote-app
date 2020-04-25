import React from "react";
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import Quote from './component/Quote';
import NasaPhoto from './component/NasaPhoto';

export default function App() {

  return (
    <HashRouter>
      <div>
        <NavBar />
        <Route component={ NasaPhoto } path='/' exact />
        <Route component={ Quote } path='/quote' />
      </div>
    </HashRouter>
  )
}


