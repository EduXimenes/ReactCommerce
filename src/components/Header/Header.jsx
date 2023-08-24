import React from 'react'
import logo from '../../assets/icons/images.png'
import NavHeader from '../NavBar/NavHeader'

export default function Header() {
    return (
        <div>
            <div>
                <img src={logo} alt='Logo'></img>
            </div>
            <div>React-Commerce</div>
            <div>
                <NavHeader />
                <button>Carrinho</button>
            </div>
        </div>
    )
}
