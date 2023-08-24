import React from 'react'

export default function Card({ title, image, price }) {
    return (
        <div>
            <img src={image} alt={`${image}`} />
            <p>{title}</p>
            <p>{price}</p>
        </div>
    )
}
