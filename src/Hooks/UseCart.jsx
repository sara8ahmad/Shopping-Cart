
import { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';


export const useCart = () => {
   
    const context = useContext(CartContext)

    return {
        ...context
    }
}