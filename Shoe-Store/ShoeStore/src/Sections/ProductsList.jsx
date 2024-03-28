import React,{useState} from 'react';
import {  productlist } from "../constants/index"
import ProductsListCard from '../components/ProductsListCard';




const ProductsList = () => {
    return (
        <div id="products-list" className="max-container max-sm:mt-12 ">
        <div className="flex flex-col justify-start gap-5">
        <h2 className="text-3xl font-palanquin font-bold text-coral-red mt-16">Products</h2>
       
            </div>
            {/* <img className='bg-green-500 w-20 h-20' src="/product-images/AirForce1S1.png" alt="" /> */}
            

<div className='mt-16 m-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
  {productlist.map((product) => (
    <ProductsListCard key= {product.name}{...product} />
                ))}
            </div>
        </div> 
    );
};
 export default ProductsList
