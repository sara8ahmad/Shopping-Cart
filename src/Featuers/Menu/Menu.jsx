import React, { useEffect, useState } from 'react'
import MenuItem from './MenuItem';
import styles from './Menu.module.scss'
import Title from './Title';
import Category from './Category';
import Search from './Search';

const Menu = () => {

  const [menu , setMenu] = useState([])
  const [input , setInput] = useState('')
  const [filter , setFilter] = useState([])
  const [category , setCategory] = useState("all")



  const searchedWord =  menu.filter( item => 
    `${item.title}`.toLowerCase().includes(input.toLowerCase()));
    
  

  useEffect( () => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>setMenu(data))
   },[] )

  
  useEffect( ()=> {
    const filteredCategory = menu.filter(item => item.category === category)
     setFilter(filteredCategory)
  } ,[category])

  

  return (
    <div className={styles.section}>

      <Title />

      <Search input ={input} setInput={setInput} />

      <Category category={category} setCategory = {setCategory} />

      <div className={styles.container}>

        { input ?  searchedWord.map(product => (<MenuItem product={product} key={product.id} />)) : 

        category != 'all'? filter.map(product => (<MenuItem product={product} key={product.id} />) ) 
        : menu.map(product => (<MenuItem product={product} key={product.id} />) )} 

      </div>
    </div>
  )
}

export default Menu