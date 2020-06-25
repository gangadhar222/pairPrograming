import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div style={{border:"1px solid black",display:"flex",flexDirection:"row", justifyContent:"space-evenly"}}>
            <Link  to="/">Home</Link>
            <Link  to="/products">Products</Link>
            <Link  to="/cart">Cart</Link>
            <Link  to="/orders">Orders</Link>
            <Link  to="/login">Login</Link>
        </div>
    )
}
