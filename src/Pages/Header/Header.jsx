import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { AiOutlineHome } from "react-icons/ai";
import {BsCart4} from 'react-icons/bs'
import {LuMenuSquare} from 'react-icons/lu'
import { useCart } from '../../Hooks/UseCart';

const Header = () => {
  
  const {cartLength} = useCart();
  return (
    <header>
      <nav  className={styles.nav}>
        <Link to='/' className={styles.nav_logo} > Eligent & Chic </Link>

        <div className={styles.nav_menu}>
          <ul className={styles.nav_list}>

            <li className={styles.nav_item}>
              <Link className={styles.nav_link} to='/'> <AiOutlineHome/> Home</Link>
            </li>
            <li className={styles.nav_item}>
              <Link className={styles.nav_link} to='/menu'> <LuMenuSquare /> Menu</Link>
            </li>
            <li className={styles.nav_item}>
              <Link className={styles.nav_link} to='/cart'> <BsCart4/> Cart {cartLength ? cartLength : 0}</Link>
            </li>

          </ul>
        </div>  

      </nav> 
    </header>
  )
}

export default Header