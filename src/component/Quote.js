import React, { useState, useEffect } from "react";
import '../App.css';

export default function Quote() {
  
  const [ quoteData, setData ] = useState({ });

  async function fetchQuote() {
    const res = await fetch("http://quotes.stormconsultancy.co.uk/random.json")
    const data = await res.json()
    setData(data)
    console.log(data)
    console.log(res)
  }

  useEffect(() => {
    fetchQuote()
  }, []);

  return (
    <div className="Quote">
      <h1 className="author">{quoteData.author}</h1>
      <p className="quotetext">{quoteData.quote}</p>
      <p className="link">{quoteData.permalink}</p>
    </div>
  )
}