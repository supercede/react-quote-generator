import React, { Component } from 'react';
import Quotes from './components/Quotes';
import quotes from './db/quotes';
import './App.css';

export default class App extends Component {
  //state
  state = {
    quote: quotes[0].quote,
    character: quotes[0].character,
  };

  //generate diffrent quote function
  generateRandomQuote = (arr) => {
    //get random numbers
    let num = Math.floor(Math.random() * quotes.length);
    let newQuote = quotes[num];

    //update state
    this.setState({
      quote: newQuote.quote,
      character: newQuote.character,
    });

    this.shuffleQuotes(quotes);
  };

  //shuufle quotes function
  shuffleQuotes = (arr) => {
    return arr.sort(function () {
      return 0.5 - Math.random();
    });
  };

  render() {
    return (
      <div>
        <h1 className='text-center'>The Simpsons Quote Generator</h1>
        <Quotes
          generateRandomQuote={this.generateRandomQuote}
          quote={this.state}
        />
      </div>
    );
  }
}
