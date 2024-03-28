import React, { useState } from 'react'
import productService from '../services/productService';
import { all } from 'axios';

function AddProducts() {
    const initialAddProductState ={
        brand:"",
        colorway:"",
        description:"",
        imagePath:"",
        name:"",
        price:0,
        quantity:0,
        size:0,
        cart:false
    };
    const [addProduct,setAddProduct]=useState(initialAddProductState);

    const handleInputChange=event=>{
        const {name,value}=event.target;
        setAddProduct({...addProduct,[name]:value});
    };

    const handleAddProduct=()=>{
        var data={
        brand:addProduct.brand,
        colorway:addProduct.colorway,
        description:addProduct.description,
        imagePath:addProduct.imagePath,
        name:addProduct.name,
        price:addProduct.price,
        quantity:addProduct.quantity,
        size:addProduct.size,
        cart:addProduct.cart
        };
        console.log(data);
        productService.create(data)
        .then((response)=>{
            console.log(response);
            alert("Product Added Successfully");

        })
        .catch((error)=>{
            console.log(error);
            alert("Error in Adding Product");
        });

        
    }
  return (
    <div className="w-full mt-40 flex flex-col items-center justify-center">
    <div className="bg-white rounded px-8 pt-6 pb-8 mb-4 w-auto">
      <div className="text-3xl font-bold mb-6 text-center text-coral-red">Add Product</div>
      <div className="inputs mb-6">
        <div className="input mb-4">
          <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" placeholder="Product Name" onChange={handleInputChange} />
        </div>
        <div className="input mb-4">
          <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="brand" placeholder="Brand" onChange={handleInputChange} />
        </div>
        <div className="input mb-4">
          <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="colorway" placeholder="Colorway" onChange={handleInputChange} />
        </div>
        <div className="input mb-4">
          <textarea className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="description" placeholder="Description" onChange={handleInputChange} />
        </div>
        <div className="input mb-4">
          <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="price" placeholder="Price" onChange={handleInputChange} />
        </div>
        <div className="input mb-4">
          <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="quantity" placeholder="Quantity" onChange={handleInputChange} />
        </div>
        <div className="input mb-4">
          <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="imagePath" placeholder="Image Path" onChange={handleInputChange} />
        </div>
        <div className="input mb-4">
          <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="size" placeholder="Size" onChange={handleInputChange} />
        </div>
      </div>
      <div className="submit-container">
        <button className="bg-coral-red hover:bg-coral-red text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" onClick={handleAddProduct}>Add Product</button>
      </div>
    </div>
  </div>
  )
}
export default AddProducts;