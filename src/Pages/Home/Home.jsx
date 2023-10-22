import React from 'react'
import styles from './Home.module.scss'
import{Link} from 'react-router-dom'

const Home = () => {
  return (

        <div className={styles.home_flex}>
          
          <div className={styles.home_data}>
            <h1 className={styles.home_title}>Send A Gift By Shopping in Eligent & Chic Botique</h1>
            <p className={styles.home_description}>
              In these end of the year holidays send a gift to your loved one
              and share the happiness at Eligent & Chic Botique.
            </p>
            <Link to="/menu" className={styles.button}>Get Started</Link>
            </div>

          <div className={styles.home_img}>
            <img src="https://i.etsystatic.com/29849072/r/il/a57d25/3644931386/il_600x600.3644931386_rhqq.jpg" alt="" />
          </div>

        </div>
  )
}

export default Home