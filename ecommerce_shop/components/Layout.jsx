import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

 export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>7 days store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
