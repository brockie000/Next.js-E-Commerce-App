import React from 'react'
import { useRouter } from 'next/router';
import data from '../../utils/data';

export default function ProductScreen() {
    const router = useRouter();
    const { slug } = router.query;
    console.log(slug)
    const product = data.products.find((a) => a.slug === slug);
    if (!product) {
        return <div>Product not found</div>
    }
    return (
        <div>
            <div>{product.name}</div>
            <button>Add To Cart</button>
        </div>
    )
}



