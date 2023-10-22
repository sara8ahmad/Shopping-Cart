
  
 export function reducer(state , action) {

    switch(action.type){

      case 'ADD_ITEM' : 
      
      const itemExsist = state.cartItems.find(item => item.id === action.payload.id)

      /*
      this Code mutate the state directly and this is may cause problems in react. 

      if(!itemExsist){
        state.cartItems.push({...action.payload , quantity : 1})
      }

      return{
        ...state,
        cartItems: [...state.cartItems ]
    }*/
 
    if(!itemExsist){
      return {
        ...state , cartItems:[...state.cartItems , {...action.payload , quantity : 1}]
      }
    }

    return state;

    case 'INCREASE_QUANTITY' : 

    const increaseAmount = state.cartItems.map((item) => {
      if(item.id === action.payload){
        return {
            ...item , quantity : item.quantity + 1
        }
      }
      return item;
    }
    )
    return {
      ...state , cartItems : increaseAmount
    }

    case 'DECREASE_QUANTITY' : 

    const itemExsists = state.cartItems.find(item => item.id === action.payload)

    const decreaseAmount = state.cartItems.map( (item) => {
      if(item.id === action.payload && itemExsists){
    
        return {
            ...item , quantity : item.quantity - 1
        }
      }
      return item;
    }
    )
    return {
      ...state , cartItems : decreaseAmount
    }

    case 'REMOVE_ITEM' :

    const withoutRemovedItem = state.cartItems.filter(item => item.id !== action.payload)

    return{
      ...state , cartItems: withoutRemovedItem
    }

    default:
      return state

    }

  }
    