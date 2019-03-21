const initialState={
  show:false,
  id:''
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

  default:
  return state;
}
}

export default reducer;