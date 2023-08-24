import React from 'react'
import Card from '../Card/Card'
import { produtos } from '../../mock/elemento'

export default function Main() {
    return (
        <div>
            <div> Search Bar </div>
            <div>
                {produtos && produtos.map((element) => (
                    <Card title={element.title} image={element.image} price={element.price} />
                ))}
            </div>
        </div>
    )
}
