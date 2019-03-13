import React, { Component } from 'react';
import './index.css';

class ResetButton extends React.Component {
    render() {
      return ( < button onClick = {this._refreshPage} >ResetGame </button>);
      }

      _refreshPage() {
        console.log("Clicked");
        window.location.reload();
      }
    }

export default ResetButton;