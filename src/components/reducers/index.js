const initialState={
  show:false,
  id:'',
  img:''
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

  default:
  return state;
}
}

export default reducer;