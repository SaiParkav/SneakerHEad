import React from 'react';
import './index.css';

import { CustomerReview, Footer, Hero, PopularProducts, Services, SpecialOffers, Subscribe, SuperQuality,Login,Signup } from './Sections';

import Nav from './components/Nav';
import ProductsList from './Sections/ProductsList';


const App = () => (
  
  <main className='relative'>
    {/* <Nav/>
    <section className='xl:passing-1 wide:padding-r padding-b'>
      <Hero/> 
    
    </section>
    <section className='padding'>
    <PopularProducts/>
    </section>
    <section className='padding-x py-10'>
    <ProductsList />
    </section>
    <section className='padding'>
    <SuperQuality/>
    </section>
    <section className='padding-x py-10'>
    <Services/>
    </section>
    <section className='padding'>
   < SpecialOffers/>
    </section>
    <section className='bg-pale-blue padding'>
    <CustomerReview/>
    </section>
    <section className='padding-x sm:py-32 py-16'>
   < Subscribe/>
    </section>
    <section className='bg-black padding-x padding-t pb-8'>
    <Footer/>
    </section> */}
    <Signup />
    <Login/>
  </main>
);

  export default App;
 