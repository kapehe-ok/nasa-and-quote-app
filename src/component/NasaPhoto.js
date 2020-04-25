import React, { useState, useEffect } from "react";
import { Image } from 'react-bootstrap';
import '../App.css';

export default function NasaPhoto() {
  
  const [ nasaData, setData ] = useState({ });

  async function fetchPhoto() {
    const apiKey = process.env.REACT_APP_NASA_KEY;
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    const data = await res.json()
    setData(data)
    console.log(data, "lalalala")
  }

  useEffect(() => {
    fetchPhoto()
  }, []);

  return (
    <div className="NasaPhoto">
      <h1 className="title">{nasaData.title}</h1>
      <Image className="photo" src={nasaData.url} />
      <p className="explanation">{nasaData.explanation}</p>
      <p className="date">{nasaData.date}</p>
    </div>
  )
}