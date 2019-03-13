 import React, { Component } from 'react';


 export const showModal = () => {
    this.props.dispatch({type: "SHOW_MODAL"});
  };

 export const hideModal = () => {
    this.props.dispatch({type: "HIDE_MODAL"})
  };

