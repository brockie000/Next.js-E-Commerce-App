/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NextLink from 'next/link';
import data from '../utils/data';
import Navbar from '../components/Navbar';
import { useState } from 'react';

export default function Home() {
  return (
    <main className='LandingPage'>
      <Navbar/>
      <NextLink href="/login">
      <div>
        Product
      </div>
      </NextLink>
      <div className='products-container'>
      {data.products.map((product) => (
        <NextLink href={`/product/${product.slug}`} passHref>
              <div className='box' item key={product.name} xs={12} sm={6} md={4} lg={3}>
                <img className='card-image' src={product.image} />
                <div>{product.name}</div>
            </div>
            </NextLink>
            ))}
      </div>

      
    </main>
  )
}
