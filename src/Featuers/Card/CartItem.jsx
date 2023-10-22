import React, { useContext } from 'react'
import styles from './Card.module.scss'
import { CartContext } from '../../Contexts/CartContext';

const CartItem = ({product}) => {

  const {cartItems , increase , decrease , removeItem } = useContext(CartContext);

  const cartItem = cartItems.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const isInCart = ele => {
    return !!cartItems.find(item => item.id === ele.id);
}

  return (
   <div className={styles.grid_container}>

    <div>
      <img src={product.image} alt="" className={styles.image}/>
    </div>
    <div className={styles.title}>
     <div className={styles.title_sm}>{product.title} </div>
     <div className={styles.price_sm}>{product.price} $</div>
   </div>
     <div className={styles.flex_position}>
     <span> Quantity : {quantity} </span>
     </div>

     <div className={styles.flex_position}>
     {
      isInCart(product) && 
       <div>
        <button 
         onClick={() => increase(product.id)}
         className={styles.btn_sm}> + </button>

         <span>{quantity}</span>

         <button 
         onClick={() => {
          if(quantity > 1 ){ decrease(product.id)}
          else{removeItem(product.id)}
         }
          
         }
         className={styles.btn_sm}> - </button>

        </div>
      }        
     </div>

     </div>
  )
}

export default CartItem