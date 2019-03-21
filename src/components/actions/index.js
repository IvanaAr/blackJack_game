 import React, { Component } from 'react';


 export const showModal = () => {
    this.props.dispatch({type: "SHOW_MODAL"});
  };

 export const hideModal = () => {
    this.props.dispatch({type: "HIDE_MODAL"})
  };

  export const setId = id => (
    { type: "SET_ID",
     id: id }
    );

 export const setImg = img => (
    { type: "SET_IMG",
     img: img }
    );