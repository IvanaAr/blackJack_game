const initialState={
  show:false,
  id:'',
  img:'',
  total:'',
  allCardValue:[]
}

const reducer= (state= initialState, action) => {
  switch(action.type){
    case "SHOW_MODAL":
    return {
      show: true
    }
  
   case "HIDE_MODAL":
    return {
      show: false
    }

    case "SET_ID":
    return Object.assign({},state, {id:action.id});

    case "SET_IMG":
    return Object.assign({},state, {img:action.img});

    case "SET_TOTAL":
    return Object.assign({},state, {total:action.total});

    case "SET_ALL_CARD_VALUE":
    return Object.assign({},state, {allCardValue:action.allCardValue});

  default:
  return state;
}
}

export default reducer;