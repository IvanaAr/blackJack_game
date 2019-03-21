import React, { Component } from 'react';
import UpButton from '../../components/upButton'
import {connect} from "react-redux";
import {setId} from '../../components/actions'

const mapStateToProps=(state)=>({
    id:state.id
})

const mapDispatchToProps = dispatch => {
  return {
    setId: id => dispatch(setId(id)),
  };
};
class Id extends Component {
    constructor(props) {
        super(props);
        this.setData = this.setData.bind(this);

    }

    setData(result) {
        console.log(result);
        const id = result.deck_id;
        console.log(id);
        this.props.setId(id);

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
        if(!this.props.id){
            return <div>Waiting for results</div>
        }
        return (

            <div>
        <UpButton/>
      </div>
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Id);