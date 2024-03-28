import { useState } from "react"
import { star } from "../../public/icons"

const ProductsListCard = ({imgURL, name, price,description,colorway,size,brand,quantity}) => {

  return (
    <div className='flex flex-1 flex-col justify-around   w-full max-sm:w-full h-[700px]'>
      <img 
      src={imgURL}
      alt= {name}
      className="w-[280px] h-[280px] object-fill" />

    <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} alt='rating icon' width={24} height={24} />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          (4.5)
        </p>
      </div>

      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        {name}
      </h3>
      <p className='mt-2  font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
        Rs.{price}/-
      </p>
      <p className='mt-2  font-semibold font-montserrat text-black text-sm leading-normal'>
        {description}
      </p>
      <div className="flex flex-row">
        <div className="flex flex-col">
      <p className='mt-2  font-semibold font-montserrat text-black text-sm leading-normal'>
        <span className="text-coral-red font-semibold text-[16px] underline">Color</span>{" "}:{" "}{colorway}
      </p>
      <p className='mt-2  font-semibold font-montserrat text-black text-sm leading-normal'>
        <span className="text-coral-red font-semibold text-[16px] underline">Size</span>{" "}:{" "} UK.{size}
      </p>
      </div>
      <div className="flex flex-col">
      <p className='mt-2  font-semibold font-montserrat text-black text-sm leading-normal'>
        <span className="text-coral-red font-semibold text-[16px] underline">Brand</span>{" "}:{" "}{brand}
      </p>
      <p className='mt-2  font-semibold font-montserrat text-black text-sm leading-normal'>
        <span className="text-coral-red font-semibold text-[16px] underline">Quantity</span>{" "}:{" "}{quantity}
      </p>
      </div>
      </div>
    
      <div className="flex justify-between align-center w-full gap-2">
      <button className="bg-coral-red hover:bg-coral-red text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline w-2/4">Add to cart</button>
      <button className="bg-coral-red hover:bg-coral-red text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-2/4">Buy Now</button>

    </div>
    </div>
  )
}

export default ProductsListCard