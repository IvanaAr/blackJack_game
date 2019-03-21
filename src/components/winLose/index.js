import React, { Component } from 'react';
import './index.css';
import {connect} from "react-redux";

const mapStateToProps=(state)=>({
    total:state.total,
   
})
class WinLose extends Component {

    render() {
        

        if (this.props.total === 21) {
            return (
                <div>
              <h2>You win <span aria-label="display popover" role="img">&#128526;</span> !!!</h2>
              <h3>ToTaL ScOrE:{this.props.total}</h3>

</div>);
        }

        if (this.props.total < 21) {
            return (

                <div>
            <h2>Get Card or Stop</h2>
            <h3>ToTaL ScOrE:{this.props.total}</h3>

</div>);
        }
        if (this.props.total > 21) {
            return (
                <div>
       <h2>You lose <span role="img" aria-label="display popover">&#128546;</span></h2>
       <h3>ToTaL ScOrE:{this.props.total}</h3>

</div>);

        }

    }
}
export default connect(mapStateToProps)(WinLose);