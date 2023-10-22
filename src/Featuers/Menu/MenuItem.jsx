import React  from 'react'
import styles from './Menu.module.scss'
import { useCart } from '../../Hooks/UseCart'

const MenuItem = ({product}) => {

  const isInCart = ele => {
    return !!cartItems.find(item => item.id === ele.id);
}
  const {addProduct ,increase , cartItems , decrease , removeItem } = useCart();

  const cartItem = cartItems.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;



  return (
    <div className={styles.grid_container}>
     <div><img src={product.image} alt="" className={styles.image}/></div>
     <div className={styles.title}>
      <div className={styles.title_sm}>{product.title}</div>
    </div>
      <div className={styles.flex_position}>

      <div className={styles.price_sm}>{product.price} $</div>
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
            
      {
       !isInCart(product) && 
          <button 
            onClick={() => addProduct(product)}
            className={styles.btn_lg}>Add to cart</button>
      } 
      </div>
    </div>
  )
}

export default MenuItem