import React from 'react';
import quotes from '../../db/quotes';

export default function QuoteAndcharacter(props) {
  const { quote, generateRandomQuote } = props;
  return (
    <div id='quote-box'>
      <div id='text-div'>
        <i className='fas fa-quote-left open quote'></i>
        <div id='text'>
          <p>
            {/* I love The Simpsons - who doesn't?? Why not click the button below
              to see some of the iconic quotes to come out of this amazing
              future-predicting sitcom? Try to see which ones you remember 😄 */}
            {quote.quote}
          </p>
          {/* <button id='generate'>Let's do this!</button> */}
        </div>
        <p id='author'>-{quote.character}</p>
      </div>
      <button
        id='new-quote'
        onClick={() => {
          generateRandomQuote(quotes);
        }}
      >
        <i className='fas fa-forward'></i>
      </button>
      <a href='a' id='tweet-quote' target='blank'>
        <button
          id='twitter'
          onClick={() => {
            window.open(
              'https://twitter.com/intent/tweet/?text=' +
                encodeURIComponent(quote.quote + ' -- ' + quote.character)
            );
          }}
        >
          <i className='fab fa-twitter'></i>
        </button>
      </a>
    </div>
  );
}
