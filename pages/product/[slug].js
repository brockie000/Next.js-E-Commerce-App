import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import data from '../../utils/data';
import { DataStore } from 'aws-amplify';
import { Products } from '../../src/models';
import Navbar from '../../components/Navbar';

export default function ProductScreen() {
    const router = useRouter();
    const { slug } = router.query;
    const [item, setItem] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
          const items = (await DataStore.query(Products)).filter(product => product.slug === slug)
          console.log(items)
          setItem(items)
        };
        fetchItems();
      }, [slug]);

    //const product = data.products.find((a) => a.slug === slug);
    if (item.length < 1) {
        return <div>Product not found</div>
    }
    return (
        <main>
            <Navbar/>
            <div>
                
                {item.map((product) => (
                    <div className='productPageMain' item key={product.name} xs={12} sm={6} md={4} lg={3}>
                        <div className='product-left'>
                            
                            <div className='mainImage'>
                                <img className='main-image' alt='' src={product.image} />
                            </div>
                            
                            <div className='sideImages'>
                                    <img alt className='miniImage' src = '/images/blackCorset.jpg' />
                                    <img alt className='miniImage' src = '/images/blackCorset.jpg' />
                            </div>
                        </div>
                        
                        <div className='product-right'>
                            <div>{product.name}</div>
                            <div>£{product.price}</div>
                        </div>

                        


                    </div>))}
                    <button>Add To Cart</button>
            </div>
        </main>
    )
}



