import React, { useEffect, useState } from 'react'
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import data from '../../utils/data'
import Navbar from '../../components/Navbar'
import { DataStore } from '@aws-amplify/datastore';
import { Products } from '../../src/models';
import { Typography } from '@material-ui/core'
import SubCategories from '../../components/SubCategories';
import Product from '../../components/Product';

export default function Tops() {
    const [item, setItem] = useState([])
    const [product, setProduct] = useState([])
    const [filter, setFilter] = useState()
    const router = useRouter();
    const { category } = router.query;

    useEffect(() => {
        const fetchItems = async () => {
          const items = await DataStore.query(Products)
          console.log(items)
          setItem(items)
        };
        fetchItems();
      }, []);

    
    /*if(filter === 'Off White Tee'){
        items = data.products.filter(product => product.name === 'Off White Tee')
    }else{
        var items = data.products.filter(product => product.category === category || product.sub.includes(category))
    }*/

    const filterButton = () => {
        setFilter('Off White Tee')
    } 
    
    const ColoredLine = ({color}) => (
        <hr
            style={{
                color: 'red',
                backgroundColor: 'red',
                width: '90%',
                height: '5'
            }}
            />
    )

    return (
        <main className='category-page'>
            <Navbar/>
            
            <div className='spinBar'>
                <span className='writing'>WorldWide Shipping</span>
            </div>

        <div className='tops-title'>WOMENS {category}</div>

        <SubCategories category={category} />
            

        <ColoredLine/>

        <div className='filter-tab'>
                <div className='price-filter-button'>
                    <div onClick={filterButton}>Filter</div>
        
                </div>

                <div className='sort-filter-button'>
                    <div>Sort By</div>
                    
                </div>
        </div>

            <div className='products-container' spacing={0}>
            {item.map((product) => (
              <div className='box' item key={product.name} xs={12} sm={6} md={4} lg={3}>
                  
                  <Product product={product} />
                   
            </div>  
            ))}
            </div>
        
        </main>
    )
}