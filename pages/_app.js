import React from 'react';


import { Layout } from '../ecommerce_shop/components/Layout';
import { StateContext } from '../ecommerce_shop/context/StateContext';


import '../styles/globals.css';




function MyApp({ Component, pageProps }) {
  return (
    <StateContext >
 



    <Layout>
        <Component {...pageProps} />
    </Layout>
    </StateContext>
  

  
   
  
 
     
      
  )
  
}

export default MyApp