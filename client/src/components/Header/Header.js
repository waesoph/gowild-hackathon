import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="header">
            <Link className="header__link" to={'/'}>
            <h1 className="header__title">Go Wild</h1>
            </Link>
            <nav className="header__nav">
                <p>My Boxes</p>
                <p>Statistics</p>
                <Link className="header__link" to={'/cart'}>
                <p>Cart</p>
                </Link>
                <p>Login</p>
            </nav>
        </div>
    )
}
