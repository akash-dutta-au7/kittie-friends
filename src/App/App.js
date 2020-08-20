import React, { Component } from 'react';
import './App.css';
import CardList from '../Components/CardList';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <CardList />
        <Footer />
      </div>
    );
  }
}

export default App;
