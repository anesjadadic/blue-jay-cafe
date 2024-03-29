import { useState } from "react";
import logo from "./assets/pictures/logo.png";
import { useShoppingCart } from "./context/ShoppingCartContext";
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from "react-router-dom";

export default function Navbar() {
    const { cartQuantity, openCart } = useShoppingCart();
    const [ openNavList, setOpenNavList ] = useState(false);
    return (
        <>
            <nav className="navbar">
                <div className="brand-header">
                    <img
                        className="logo-image" 
                        src={logo}
                        height={100}
                    />
                    <a className="mobile-navbar-button" onClick={() => setOpenNavList(!openNavList)}>{openNavList ? <FaTimes/> : <FaBars/>}</a>
                </div>
                <div className={openNavList ? 'navbar-links-active' : 'navbar-links'}>
                    <ul>
                        <li>
                            <Link to="/">home</Link>
                        </li>
                        <li>
                            <Link to="/shop">shop</Link>
                        </li>
                        <li>
                            <Link to="/menu">menu</Link>
                        </li>
                        <li>
                            <a 
                                className="cart-button" onClick={openCart}>cart 
                                <span style={{color: "rgba(29,127,192,1)"}}> ({cartQuantity})</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}