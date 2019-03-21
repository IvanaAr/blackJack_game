import React, { Component } from 'react';
import WinLose from '../../components/winLose';
import './index.css';
import DownButton from '../../components/downButton';
import {setImg, setTotal, setAllCardValue, setNewCardImg} from '../../components/actions';
import {connect} from "react-redux";

const mapStateToProps=(state)=>({
    img:state.img,
    id:state.id,
    total:state.total,
    allCardValue:state.allCardValue,
    newCardImg:state.newCardImg
})

const mapDispatchToProps = dispatch => {
  return {
    setImg: img => dispatch(setImg(img)),
    setTotal: total => dispatch(setTotal(total)),
    setAllCardValue: allCardValue => dispatch(setAllCardValue(allCardValue)),
    setNewCardImg: newCardImg => dispatch(setNewCardImg(newCardImg)),
  };
};

class UpButton extends Component {
    constructor(props) {
        super(props)

        this.setImg = this.setImg.bind(this);
        this.newCard = this.newCard.bind(this);
    }

    setImg(result) {
        console.log(result);
        const img = result.cards[0].image;
        this.props.setImg(img);
        
       //* add value of first card *//
        let allCardValue = this.props.allCardValue;
        const newCardValue = result.cards[0].value;

        // value of first card
        if (newCardValue === "ACE" || newCardValue === "KING" || newCardValue === "JACK" || newCardValue === "QUEEN") {
            if (newCardValue === "ACE") {
                var specialCardAce = 11;
                allCardValue.push(specialCardAce);
                this.props.setAllCardValue(allCardValue);

            } else {
                var specialCard = 10;
                allCardValue.push(specialCard);
                this.props.setAllCardValue(allCardValue);
            }


        } else {


            const newCardValueNumber = Number(newCardValue);
            allCardValue.push(newCardValueNumber);
            console.log(newCardValueNumber);
            this.props.setAllCardValue(allCardValue);

        }
        
    }


    newCard(result) {
        // Image of card//

        console.log(result);
        let newCardImg = this.props.newCardImg;
        const newCardImg1 = result.cards[0].image;
        newCardImg.push(newCardImg1);
        this.props.setNewCardImg(newCardImg);
        // Value of card//
        let allCardValue = this.props.allCardValue;
        const newCardValue = result.cards[0].value;

        if (newCardValue === "ACE" || newCardValue === "KING" || newCardValue === "JACK" || newCardValue === "QUEEN") {
            if (newCardValue === "ACE") {
                var specialCardAce = 11;
                allCardValue.push(specialCardAce);
                this.props.setAllCardValue(allCardValue);

            } else {
                var specialCardAce = 10;
                allCardValue.push(specialCardAce);
                this.props.setAllCardValue(allCardValue);
            }


        } else {


            const newCardValueNumber = Number(newCardValue);
            console.log(newCardValueNumber);
            allCardValue.push(newCardValueNumber);
          this.props.setAllCardValue(allCardValue);

        }
        const all = this.props.allCardValue;
        console.log(all);
        var total = 0;
        for (var i in all) { total += all[i]; }
        this.props.setTotal(total);
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
        const all = this.props.allCardValue;
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
            <WinLose allCardValue={this.props.allCardValue} />
            <button id="getCard" disabled={this.isDisabled()} onClick={(e) => this.upClick(e)}>Get Card</button><br/>
            <img  src={this.props.img} alt=""/>
        {
          this.props.newCardImg.map(
            (newCardImg1, index) => <img key={index} src={newCardImg1} alt='' id={index}/>
          )
        }
            <DownButton total={this.props.total}/>

            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UpButton);