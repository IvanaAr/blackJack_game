import React, { Component } from 'react';
import './App.css';
import Id from '././components/id';
import Header from '././components/header';
import Footer from '././components/footer';
import ResetButton from '././components/resetButton';
import {createStore} from "redux";
import {Provider} from "react-redux";


const initialState={
  show:false
}
function reducer(state= initialState,action){
  switch(action.type){
    case "SHOW_MODAL":
    return {
      show: true
    }
  
   case "HIDE_MODAL":
    return {
      show: false
    }
  console.log(action);
  default:
  return state;
}
}

const store= createStore(reducer);

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