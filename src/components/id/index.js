import React, { Component } from 'react';
import UpButton from '../../components/upButton'

class Id extends Component {
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
        <UpButton  id={this.state.id}/>
      </div>
        );
    }
}
export default Id;