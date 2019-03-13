import React, { Component } from 'react';
import './App.css';
import Id from '././components/id';
import Header from '././components/header';
import Footer from '././components/footer';
import ResetButton from '././components/resetButton';

class App extends Component {

    render() {
        return (
            <div>
      <Header/>
      <br/>
      <Id/>
      <br/>
      <ResetButton/>
      <Footer/>
      </div>
        );

    }
}



export default App;