import React, { useState, useEffect } from "react";

export default function Quote() {
  const [quoteData, setQuoteData] = useState(null);

  useEffect(() => {
    fetchQuote();

    async function fetchQuote() {
      const res = await fetch(
        "http://quotes.stormconsultancy.co.uk/random.json"
      );
      const data = await res.json();
      setQuoteData(data);
    }
  }, []);

  if (!quoteData) return <div />;

  return (
    <div className="quote">
      <p className="quote-text">{quoteData.quote}</p>
      <p className="author">- <a href={quoteData.permalink}>{quoteData.author}</a></p>
    </div>
  );
}
