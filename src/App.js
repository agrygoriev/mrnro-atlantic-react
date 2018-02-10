import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './css/style.css';
import './css/route.css';
import Footer from './containers/footer';
import MainSection from './containers/main-page';
import Nav from './containers/nav';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <MainSection />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
