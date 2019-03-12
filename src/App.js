import React, { Component } from 'react';
import './App.css';
import Id from '././components/id';
import Header from '././components/header';
import Footer from '././components/footer';

class App extends Component {

    render() {
        return (
            <div>
      <Header/>
      <br/>
      <Id/>
      <br/>
      <button>DOWN</button>
      <Footer/>
      </div>
        );

    }
}



export default App;