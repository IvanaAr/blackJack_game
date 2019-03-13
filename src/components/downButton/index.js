import React, { Component } from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {connect} from "react-redux";

class DownButton extends Component {
constructor(){
    super()

}
   

  showModal = () => {
    this.props.dispatch({type: "SHOW_MODAL"});
  };

  hideModal = () => {
    this.props.dispatch({type: "HIDE_MODAL"})
  };

  render() {
    return (
      <main>
        <Modal show={this.props.show} handleClose={this.hideModal}>
          <p>Your Total Score is:</p>
          <p>{this.props.total}</p>
        </Modal>
        <button type="button" onClick={this.showModal}>
          Down
        </button>
      </main>
    );
  }
}

const Modal = ({ handleClose, show, children }) => {
const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

const mapStateToProps=(state)=>({
  show: state.show
})
export default connect(mapStateToProps)(DownButton);