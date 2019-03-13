const initialState={
  show:false
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
  console.log(action);
  default:
  return state;
}
}

export default reducer;