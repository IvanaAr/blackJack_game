const initialState={
  show:false,
  id:'',
  img:'',
  total:''
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

  default:
  return state;
}
}

export default reducer;