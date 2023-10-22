import styles from './Menu.module.scss'

const Search = ({input , setInput}) => {
    
  return (
    <div className={styles.position}>
        <input className={styles.input} placeholder='Search Product' type='text' value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  )
}

export default Search