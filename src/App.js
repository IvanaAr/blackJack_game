import React, { Component } from 'react';
import './App.css';
import Id from '././components/id';
import Header from '././components/header';

class App extends Component {

    render() {
        return (
            <div>
      <Header/>
      <Id/>
      <button>DOWN</button>
      </div>
        );

    }
}



export default App;