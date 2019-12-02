import React, { useState, useEffect } from 'react';
import './App.css';

import Product from './Product';
import Cart from './Cart'



export default function App() {

  const [products, getProducts] = useState([]);

  const url = "https://raw.githubusercontent.com/razcristea/some-jsons/master/products.json"
  
  
  useEffect(() => {
    async function fetchData() {   
      const response = await fetch(url);
      const result = await response.json();
      result.map( item => item.qty = 0 )
      getProducts(result); 
    }

    fetchData();
  }, []);
    
  
    // const handleAdd = (e) =>{
    //     const boughtItem = e.target.id
    //     products.map(product=> product.id == boughtItem ? product.qty++ : null)
    //     console.log(products.filter(item=> boughtItem == item.id))
    // } 
  
    
    const handleAdd = (e) =>{
      const boughtItem = e.target.id
      const newList = products.map((product,index)=> {
                                    if(product.id == boughtItem) {
                                      product.qty++
                                      return product
                                    } else {
                                      return product
                                    }
                                  })
      getProducts(newList)
    } 


    const handleRemove = (e) =>{
        const boughtItem = e.target.id
        const newList = products.map((product,index)=> {
                                    if(product.id == boughtItem && product.qty > 0) {
                                      product.qty--
                                      return product
                                    } else {
                                      return product
                                    }
                                  })
        getProducts(newList)
    } 
    

  return (
    <>
      <Product products={products} handleAdd={handleAdd}/>
      <Cart products={products} handleAdd={handleAdd} handleRemove={handleRemove} />
      </>
  );
}

