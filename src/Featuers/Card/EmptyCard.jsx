import React from 'react'
import styles from './Card.module.scss'

const EmptyCard = () => {
  return (
    <div className={styles.empty_card}>Your Card is Empty</div>
  )
}

export default EmptyCard