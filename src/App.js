import React, { Component } from 'react';
import './App.css';
import Id from '././components/id';
import Header from '././components/header';
import Footer from '././components/footer';
import ResetButton from '././components/resetButton';
import {Provider} from "react-redux";
import store from '././components/store';

class App extends Component {

    render() {
        return (
      <div>
      <Provider store={store}>
      <Header/>
      <br/>
      <Id/>
      <br/>
      <ResetButton/>
     <Footer/>
     </Provider>
      </div>
        );

    }
}



export default App;