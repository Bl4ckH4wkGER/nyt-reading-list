import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home';
import BestSellerSearch from './bestsellersearch';
import Articles from './articles';
import Movies from './movies';
import empire from './empire-state.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='header-content'>
          <img id='app-logo' src={empire} alt='Empire State Building'/>
          <div className='app-name'>NYT - What to read and watch?</div>
          <button className='header-button'>
            <Link className='header-link' to="/">HOME</Link>
          </button>
          <button className='header-button'>
            <Link className='header-link' to="/bestseller-search/">Bestsellers</Link>
          </button>
          <button className='header-button'>
            <Link className='header-link' to="/article-search/">Articles</Link>
          </button>
          <button className='header-button'>
            <Link className='header-link' to="/movie-search/">Movies</Link>
          </button>
        </div>
        <div className='app-content'>
          <>
            <Route exact path="/" component={Home} />
            <Route exact path="/bestseller-search" component={BestSellerSearch} />
            <Route exact path="/article-search" component={Articles} />
            <Route exact path="/movie-search" component={Movies} />
          </>
        </div>
      </Router>
    </div>
  );
}

export default App;
