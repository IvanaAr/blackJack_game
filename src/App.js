import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: ''
        }

        this.setData = this.setData.bind(this);

    }

    setData(result) {
        console.log(result);
        const id = result.deck_id;
        console.log(id);
        this.setState({ id: id });

    }


    componentDidMount() {
        const url = new URL('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2')
        const request = new Request(url, {
            method: 'GET',
            mode: 'cors'
        });

        fetch(request).then(result =>
                result.json()).then(result => this.setData(result))
            .catch(function(error) { console.log(error); })
    }

    render() {
        if (!this.state.id || this.state.id.length === 0) {
            return "";
        }
        return (

            <div>
      <Button id={this.state.id}/>
      <button>DOWN</button>
      </div>
        );
    }
}



class Button extends Component{
  constructor(){
    super()

    this.state = {
            newCardImg: [],
            allCardValue:[],
            img:[]

        }
          this.setImg = this.setImg.bind(this);
    this.newCard=this.newCard.bind(this);
  }

  setImg(result) {
    let allCardValue=this.state.allCardValue;
        console.log(result);
        const img = result.cards[0].image;
        console.log(img);
        console.log(this.props.id);
        const newCardValue=result.cards[0].value;
        console.log(newCardValue);
        
        if (newCardValue === "ACE" || newCardValue === "KING"|| newCardValue === "JACK"|| newCardValue === "QUEEN") {
  if (newCardValue === "ACE") {
  var specialCardAce=11;
  allCardValue.push(specialCardAce);

}
else{ var specialCard=10;
  allCardValue.push(specialCard);}
 
  
}

else{

   
    const newCardValueNumber=Number(newCardValue);
    console.log(newCardValueNumber);
    allCardValue.push(newCardValueNumber);
    console.log(allCardValue);

}


        const newCardValueNumber=Number(newCardValue);
        this.setState({ img: img,
                       allCardValue:allCardValue
         })
    }


  newCard(result){
// Image of card//

    console.log(result);
    let newCardImg=this.state.newCardImg;
    const newCardImg1=result.cards[0].image;
    newCardImg.push(newCardImg1);

// Value of card//
    let allCardValue=this.state.allCardValue;
    const newCardValue=result.cards[0].value;

if (newCardValue === "ACE" || newCardValue === "KING"|| newCardValue === "JACK"|| newCardValue === "QUEEN") {
  if (newCardValue === "ACE") {
  var specialCardAce=11;
  allCardValue.push(specialCardAce);

}
else{ var specialCard=10;
  allCardValue.push(specialCard);}
 
  
}

else{

   
    const newCardValueNumber=Number(newCardValue);
    console.log(newCardValueNumber);
    allCardValue.push(newCardValueNumber);
    console.log(allCardValue);

}
    this.setState({ newCardImg: newCardImg,
                    allCardValue:allCardValue
                 })
  }
  upClick(e){
    console.log("Yes you click");
    console.log(this.props.id)
        const url2 = new URL('https://deckofcardsapi.com/api/deck/'+this.props.id+'/draw/?count=2')
        const request2 = new Request(url2, {
            method: 'GET',
            mode: 'cors'
        });

        fetch(request2).then(result =>
                result.json()).then(result => this.newCard(result))
            .catch(function(error) { console.log(error); })

  }
isDisabled(){
  const all=this.state.allCardValue;
    console.log(all);
  var total=0;
  for(var i in all) { total += all[i]; }
    console.log(total)
    if (total>21) {
      return (<div>
</div>);}
if (total===21) {
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
  render(){
    
    return(
<div>
<div>
    <button disabled={this.isDisabled()} onClick={(e) => this.upClick(e)}>UP</button>
    {
          this.state.newCardImg.map(
            (newCardImg1, index) => <img key={index} src={newCardImg1} alt='' id={index}/>
          )
        }
</div>
<img  src={this.state.img} alt=""/>
<div>
<WinLose allCardValue={this.state.allCardValue} />
</div>
    </div>
    )
  }
}

class WinLose extends Component{
  constructor(props){
    super(props)
  
}

  render(){
    const all=this.props.allCardValue;
    console.log(all);
  var total=0;
  for(var i in all) { total += all[i]; }
    console.log(total)
    if (total===21) {
      return (<div>you win
</div>);
    }

       if (total<21) {
      return (<div>Get Card or Stop
</div>);
    }
   if (total>21) {
      return (<div>You lose
</div>);
    }

  }
}
export default App;