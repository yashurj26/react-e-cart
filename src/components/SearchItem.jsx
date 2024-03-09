import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';

const SearchItem = (cart, setCart) => {
    const {term} = useParams();
    const [filterProduct,setFilterProduct] = useState([]);

    useEffect(() => {
        const filterProduct1 = items.filter(
            (product)=> product.title.toLowerCase().includes(term.toLowerCase())
        )
        setFilterProduct(filterProduct1);
        console.log(filterProduct1);
    }, [term])
    

    

  return (
    <Product items={filterProduct} cart={cart} setCart={setCart}/>
  )
}

export default SearchItem