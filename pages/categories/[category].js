import React from 'react'
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import data from '../../utils/data'
import Navbar from '../../components/Navbar'
import { Typography } from '@material-ui/core'
import SubCategories from '../../components/SubCategories';
import Product from '../../components/Product';

export default function Tops() {
    const router = useRouter();
    const { category } = router.query;
    let items = data.products.filter(product => product.category === category || product.sub.includes(category))

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
            <div className='writing'>WorldWide Shipping</div>
            </div>

        <div className='tops-title'>WOMENS {category.toUpperCase()}</div>

        <SubCategories category={category}/>

        <ColoredLine/>

        <div className='filter-tab'>
                <div className='filter-button'>
                    <div>Price</div>
        
                </div>

                <div className='filter-button'>
                    <div>Sort By</div>
                    
                </div>
        </div>

            <div className='products-container' spacing={0}>
            {items.map((product) => (
              <div className='box' item key={product.name} xs={12} sm={6} md={4} lg={3}>
                  
                  <Product product={product} />
                   
            </div>  
            ))}
            </div>
        
        </main>
    )
}