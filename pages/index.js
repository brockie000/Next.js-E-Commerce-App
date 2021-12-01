/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NextLink from 'next/link';
import api from '../components/api/contacts'
import data from '../utils/data';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Home() {

  const [posts, setPosts] = useState([]);

  /*const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
    console.log(response.data);
  };*/
  
  useEffect(() => {
    const fetchPosts = async () => {
      try{
        const response = await api.get('/names');
        setPosts(response.data);
        console.log(posts)
      }catch (err) {

      }
    };

    fetchPosts()
  }, [])

  return (
    <main className='LandingPage'>
      <Navbar/>
  
      <div className='landingContainer'>

        <NextLink href={`/categories/new`}>
        <div className='landingPageBox'>
            <a href='/'>
              <img className='landingPageImage' src='images/new.jpeg'/>
            </a>
            <div className='landingBoxText'>New Arrivals</div>
         </div>
         </NextLink>

         <NextLink href={`/categories/tops`}>
        <div className='landingPageBox'>
            <a href='/'>
              <img className='landingPageImage' src='images/corset.png'/>
            </a>
            <div className='landingBoxText'>Tops</div>
         </div>
         </NextLink>

         <NextLink href={`/categories/jumpers`}>
        <div className='landingPageBox'>
            <a href='/'>
              <img className='landingPageImage' src='images/jumper.jpg'/>
            </a>
            <div className='landingBoxText'>Co-Ords</div>
         </div>
         </NextLink>

         <NextLink href={`/categories/dresses`}>
        <div className='landingPageBox'>
            <a href='/'>
              <img className='landingPageImage' src='images/Dress(1).jpg'/>
            </a>
            <div className='landingBoxText'>Dresses</div>
         </div>
         </NextLink>

         <NextLink href={`/categories/bottoms`}>
        <div className='landingPageBox'>
            <a href='/'>
              <img className='landingPageImage' src='images/jeans(1).jpeg'/>
            </a>
            <div className='landingBoxText'>Bottoms</div>
         </div>
         </NextLink>

         <NextLink href={`/categories/accessories`}>
        <div className='landingPageBox'>
            <a href='/'>
              <img className='landingPageImage' src='images/bag.jpeg'/>
            </a>
            <div className='landingBoxText'>Accessories</div>
         </div>
         </NextLink>

         <NextLink href={`/categories/accessories`}>
        <div className='landingPageBox'>
            <a href='/'>
              <img className='landingPageImage' src='images/lounge(1).jpeg'/>
            </a>
            <div className='landingBoxText'>Lounge</div>
         </div>
         </NextLink>

         <NextLink href={`/categories/accessories`}>
        <div className='landingPageBox'>
            <a href='/'>
              <img className='landingPageImage' src='images/jumper.jpg'/>
            </a>
            <div className='landingBoxText'>Activewear</div>
         </div>
         </NextLink>

         <NextLink href={`/categories/accessories`}>
        <div className='landingPageBox'>
            <a href='/'>
              <img className='landingPageImage' src='images/bag.jpeg'/>
            </a>
            <div className='landingBoxText'>Sale</div>
         </div>
         </NextLink>

      </div>

      <div className = 'newArrivalsContainer'>
        <div className = 'newArrivalsText'>
          New Arrivals
          {posts.id}
        </div>
      </div>


      
    </main>
  )
}
