import React,{useEffect, useState} from 'react';
import {  productlist } from "../constants/index"
import ProductsListCard from '../components/ProductsListCard';
import productService from '../services/productService';

const ProductsList = () => {
    const [products,setProducts]=useState([]);
    useEffect (()=>{
        productService.getAll()
        .then(response=>{
            console.log(response);
            setProducts(response.data);
        })
    },[])
  
  return (
    <section id="popular-products" className="max-container max-sm:mt-14">
      <div className="flex flex-col justify-start gap-5">
      <h2 className="text-4xl font-palanquin font-bold text-coral-red mt-20 ml-10 text-center"> PRODUCTS </h2>
      
      </div>

      <div className='mt-7 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 m-4'>
        {products.map((product) => (
          <ProductsListCard key= {product.name}{...product} />
        ))}
      </div>
    </section>
  )
}

export default ProductsList
