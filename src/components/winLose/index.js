import React, { Component } from 'react';
import './index.css';

class WinLose extends Component {

    render() {
        const all = this.props.allCardValue;
        console.log(all);
        var total = 0;
        for (var i in all) { total += all[i]; }
        console.log(total)

        if (total === 21) {
            return (
                <div>
              <h2>You win <span aria-label="display popover" role="img">&#128526;</span> !!!</h2>
              <h3>ToTaL ScOrE:{total}</h3>

</div>);
        }

        if (total < 21) {
            return (

                <div>
            <h2>Get Card or Stop</h2>
            <h3>ToTaL ScOrE:{total}</h3>

</div>);
        }
        if (total > 21) {
            return (
                <div>
       <h2>You lose <span role="img" aria-label="display popover">&#128546;</span></h2>
       <h3>ToTaL ScOrE:{total}</h3>

</div>);

        }

    }
}
export default WinLose;