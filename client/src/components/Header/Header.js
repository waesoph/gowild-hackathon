import React from 'react'
import './Header.scss'

export default function Header() {
    return (
        <div className="header">
            <h1>Go Wild</h1>
            <nav className="header__nav">
                <p>My Boxes</p>
                <p>Statistics</p>
                <p>Cart</p>
                <p>Login</p>
            </nav>
        </div>
    )
}
