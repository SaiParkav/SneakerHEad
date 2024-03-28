import { productlist } from "../constants"
import ProductsListCard from "../components/ProductsListCard"

const ProductsList = () => {
  return (
    <section id="popular-products" className="max-container max-sm:mt-14">
      <div className="flex flex-col justify-start gap-5">
      <h2 className="text-4xl font-palanquin font-bold text-coral-red mt-20 ml-10"> PRODUCTS </h2>
      
      </div>

      <div className='mt-7 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 m-4'>
        {productlist.map((product) => (
          <ProductsListCard key= {product.name}{...product} />
        ))}
      </div>
    </section>
  )
}

export default ProductsList
