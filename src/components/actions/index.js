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

 export const setTotal = total => (
    { type: "SET_TOTAL",
     total: total }
    );

 export const setAllCardValue = allCardValue => (
    { type: "SET_ALL_CARD_VALUE",
     allCardValue: allCardValue }
    );

 export const setNewCardImg = newCardImg => (
    { type: "SET_NEW_CARD_IMG",
     newCardImg: newCardImg }
    );