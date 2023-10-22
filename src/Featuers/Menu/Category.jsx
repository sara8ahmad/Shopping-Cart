

const Category = ({category , setCategory}) => {


  return (
    <div>
      <select value={category} onChange={(e)=>setCategory(e.target.value) }>
      <option value='all'>All</option>  
      <option value="men's clothing">Men Clothing</option>
      <option value="jewelery">Jewelery</option>
      <option value="electronics">Electronics</option>
      <option value="women's clothing">Women Clothing</option>
    </select>
    </div>
  )
}

export default Category