import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            This is the home page
            <Link to='/select'>Browse our selection</Link>            
        </div>
    )
}
