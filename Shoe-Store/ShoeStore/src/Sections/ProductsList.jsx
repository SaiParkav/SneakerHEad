import React,{useState} from 'react';
const sneakers =[
    {
        id:1,
        name: 'Nike Air Force 1',
        price: '$90',
        image:'https://via.placeholder.com/150',
    },
    {
        id:2,
        name:'Adidas Superstar',
        price:'$80',
        image:'https://via.placeholder.com/150',
    },
];
const ProductsList = () => {
    return (
        <div id="products-list" className="container mx-auto py-8">
            <h2 className='text-3xl font-semibold mb-4'>Sneakers</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {sneakers.map((sneaker)=>(
                   <div key= {sneaker.id} className="border border-gray-200 p-4">
                   <img src={sneaker.image} alt={ sneaker.name} className="mx-auto" style ={{maxWidth:'100%',height:'auto'}}/>
                   <p className='text-lg font-semibold mt-2'> {sneaker.name}</p>
                    <p className='text-gray-600'>{sneaker.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
 export default ProductsList
