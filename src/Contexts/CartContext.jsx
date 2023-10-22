import { createContext, useMemo, useReducer } from "react";
import { reducer } from "./CartReducer";


export const CartContext = createContext();


const CardProvider = ({children}) => {

    const initialState = { 
        cartItems: [],
      } 
    
    
    const [ {cartItems} , dispatch] = useReducer( reducer , initialState);

    const addProduct = payload => {
        dispatch({type: 'ADD_ITEM', payload})
    }

    const increase = (id) => {
      dispatch({ type: 'INCREASE_QUANTITY' , payload: id })
    }

    const decrease = (id) => {
      dispatch({ type: 'DECREASE_QUANTITY' , payload: id })
    }

    const removeItem = (id) => {
      dispatch({ type: 'REMOVE_ITEM' , payload: id })
    }

   const cartLength = useMemo (() => cartItems.reduce((prev , curr) => prev + curr.quantity , 0) , [cartItems])
   const totalPrice = useMemo (() =>cartItems.reduce((prev , curr) => prev + curr.price * curr.quantity , 0) , [cartItems])
     
    console.log(cartItems);
    return(
      <CartContext.Provider value={{addProduct ,increase , cartItems ,decrease , removeItem , cartLength , totalPrice }}>
         {children}
      </CartContext.Provider>
    )
}

export default CardProvider;
