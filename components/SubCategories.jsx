/* eslint-disable react/jsx-key */
import React from 'react'
import data from '../utils/data';

export default function SubCategories(category) {
    console.log(category.category)
    let items = data.categories.filter(categories => categories.name === category.category)

    return (
        <main className='subcategories'>
        {items.map((categories) => (
        <div className='sC-item'>
            <a className="sC-item">{categories.sub[0]}</a>
            <a className="sC-item">{categories.sub[1]}</a>
            <a className="sC-item">{categories.sub[2]}</a>
            <a className="sC-item">{categories.sub[3]}</a>
            <a className="sC-item">{categories.sub[4]}</a>
        </div>
        ))}
        </main>
    )
}
