import React,{useState,useEffect} from 'react'
import productService from '../services/productService';
import CartItems from './CartItems';
CartItems
function ShowCart() {
  const [cart,setCart]=useState([]);
    useEffect (()=>{
        productService.cart()
        .then(response=>{
            console.log(response);
            setCart(response.data);
        })
    },[])
  
  return (
    <section id="popular-products" className="max-container max-sm:mt-14">
      <div className="flex flex-col justify-start gap-5">
      <h2 className="text-4xl font-palanquin font-bold text-coral-red mt-20 ml-10 text-center"> Cart Items </h2>
      
      </div>

      <div className='mt-7 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 m-4'>
        {cart.map((product) => (
          <CartItems key= {product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
export default ShowCart;