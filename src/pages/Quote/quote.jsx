import { useState, useEffect } from "react";

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  function getNewQuote() {
    setQuote(getRandomQuote(quotes));
  }

  return (
      <section id="projects" className="body-font h-screen">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-ternary-dark dark:text-ternary-light">
            Quote
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed sm:text-4xl text-3xl text-ternary-dark dark:text-ternary-light">
            <span>"</span>
            {quote?.text}
            <span>"</span>
          </p>
          <p className="text-ternary-dark dark:text-ternary-light"> - {quote?.author}</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={getNewQuote}>New Quote</button>
       </div>
    </section> 
  );
}
