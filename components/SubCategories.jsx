/* eslint-disable react/jsx-key */
import React from 'react'
import data from '../utils/data';
import NextLink from 'next/link';

export default function SubCategories(category) {
    console.log(category.category)
    let items = data.categories.filter(categories => categories.name === category.category)

    return (
        <main className='subcategories'>
        {items.map((categories) => (
        <div className='sC-item'>

            <a href ={`/categories/${categories.sub[0]}`}>
                <a className="sC-item">{categories.sub[0]}</a>
            </a>

            <NextLink href ={`/categories/${categories.sub[1]}`}>
                <a className="sC-item">{categories.sub[1]}</a>
            </NextLink>

            <NextLink href ={`/categories/${categories.sub[2]}`}>
                <a className="sC-item">{categories.sub[2]}</a>
            </NextLink>

            <NextLink href ={`/categories/${categories.sub[3]}`}>
                <a className="sC-item">{categories.sub[3]}</a>
            </NextLink>

            <NextLink href ={`/categories/${categories.sub[4]}`}>
                <a className="sC-item">{categories.sub[4]}</a>
            </NextLink>
        </div>
        ))}
        </main>
    )
}
