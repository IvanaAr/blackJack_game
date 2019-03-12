import React, { Component } from 'react';


class WinLose extends Component {

    render() {
        const all = this.props.allCardValue;
        console.log(all);
        var total = 0;
        for (var i in all) { total += all[i]; }
        console.log(total)
        if (total === 21) {
            return (<div>you win
</div>);
        }

        if (total < 21) {
            return (
            <div>Get Card or Stop
</div>);
        }
        if (total > 21) {
            return (
            <div>You lose
</div>);
        }

    }
}
export default WinLose;