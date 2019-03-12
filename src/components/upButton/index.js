import React, { Component } from 'react';
import WinLose from '../../components/winLose'

class UpButton extends Component {
    constructor() {
        super()

        this.state = {
            newCardImg: [],
            allCardValue: [],
            img: []

        }
        this.setImg = this.setImg.bind(this);
        this.newCard = this.newCard.bind(this);
    }

    setImg(result) {
        let allCardValue = this.state.allCardValue;
        console.log(result);
        const img = result.cards[0].image;
        console.log(img);
        console.log(this.props.id);
        const newCardValue = result.cards[0].value;
        console.log(newCardValue);

        if (newCardValue === "ACE" || newCardValue === "KING" || newCardValue === "JACK" || newCardValue === "QUEEN") {
            if (newCardValue === "ACE") {
                var specialCardAce = 11;
                allCardValue.push(specialCardAce);

            } else {
                var specialCard = 10;
                allCardValue.push(specialCard);
            }


        } else {


            const newCardValueNumber = Number(newCardValue);
            console.log(newCardValueNumber);
            allCardValue.push(newCardValueNumber);
            console.log(allCardValue);

        }

        this.setState({
            img: img,
            allCardValue: allCardValue
        })
    }


    newCard(result) {
        // Image of card//

        console.log(result);
        let newCardImg = this.state.newCardImg;
        const newCardImg1 = result.cards[0].image;
        newCardImg.push(newCardImg1);

        // Value of card//
        let allCardValue = this.state.allCardValue;
        const newCardValue = result.cards[0].value;

        if (newCardValue === "ACE" || newCardValue === "KING" || newCardValue === "JACK" || newCardValue === "QUEEN") {
            if (newCardValue === "ACE") {
                var specialCardAce = 11;
                allCardValue.push(specialCardAce);

            } else {
                var specialCard = 10;
                allCardValue.push(specialCard);
            }


        } else {


            const newCardValueNumber = Number(newCardValue);
            console.log(newCardValueNumber);
            allCardValue.push(newCardValueNumber);
            console.log(allCardValue);

        }
        this.setState({
            newCardImg: newCardImg,
            allCardValue: allCardValue
        })
    }
    upClick(e) {
        console.log("Yes you click");
        console.log(this.props.id)
        const url2 = new URL('https://deckofcardsapi.com/api/deck/' + this.props.id + '/draw/?count=2')
        const request2 = new Request(url2, {
            method: 'GET',
            mode: 'cors'
        });

        fetch(request2).then(result =>
                result.json()).then(result => this.newCard(result))
            .catch(function(error) { console.log(error); })

    }
    isDisabled() {
        const all = this.state.allCardValue;
        console.log(all);
        var total = 0;
        for (var i in all) { total += all[i]; }
        console.log(total)
        if (total > 21) {
            return (<div>
</div>);
        }
        if (total === 21) {
            return (<div>
</div>);
        }
    }

    componentDidMount(props) {

        console.log(this.props.id)
        const url2 = new URL('https://deckofcardsapi.com/api/deck/' + this.props.id + '/draw/?count=2')
        const request2 = new Request(url2, {
            method: 'GET',
            mode: 'cors'
        });

        fetch(request2).then(result =>
                result.json()).then(result => this.setImg(result))
            .catch(function(error) { console.log(error); })


    }
    render() {

        return (
            <div>
            <WinLose allCardValue={this.state.allCardValue} />
    <button id="getCard" disabled={this.isDisabled()} onClick={(e) => this.upClick(e)}>Get Card</button><br/>
    {
          this.state.newCardImg.map(
            (newCardImg1, index) => <img key={index} src={newCardImg1} alt='' id={index}/>
          )
        }
<img  src={this.state.img} alt=""/>
<div>

</div>
    </div>
        )
    }
}

export default UpButton;