import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

import boxIcon from '../../assets/akar-icons_shipping-box-01.svg'
import statsIcon from '../../assets/bi_bar-chart-line-fill.svg'

export default function Header() {
    return (
        <div className="header">
            <Link className="header__logo" to={'/'}>
            <h1 className="header__title">Go Wild</h1>
            </Link>
            <nav className="header__nav">
                <p className="header__link header__link--box">My Boxes</p>
                <p className="header__link header__link--stats">Statistics</p>
                <Link className="header__logo" to={'/cart'}>
                <p className="header__link header__link--cart">Cart</p>
                </Link>
                <p className="header__link header__link--login">Login</p>
            </nav>
        </div>
    )
}
