import React, { useContext, useState } from 'react'
import CartItem from './CartItem'
import styles from './Card.module.scss'
import EmptyCard from './EmptyCard'
import { useCart } from '../../Hooks/UseCart'

const Cart = () => {

  const { cartItems , cartLength , totalPrice } = useCart();

  return (

    <div>

      <div className={styles.cart_title}> Cart </div>

    <div>
    { cartItems.map(product => (<CartItem product={product} key={product.id} />)) }
    </div>
    
    { cartLength ? 
      <div className={styles.container}>
     <span className={styles.total_span}>Total Price </span>
     <div className={styles.total_price}> {totalPrice.toFixed(2)} $ </div>
    </div>  : <EmptyCard /> }

    </div>

    
  )
}

export default Cart