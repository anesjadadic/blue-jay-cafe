import { useState } from "react";
import Navbar from "./Navbar";
import { items } from "./ShopList";
import { useShoppingCart } from "./context/ShoppingCartContext";
import { HiMinusCircle } from 'react-icons/hi'
import { HiPlusCircle } from 'react-icons/hi'
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import Footer from "./Footer";

export default function Shop() {
    let [showCoffee, setShowCoffee] = useState(true);
    let [showMerch, setShowMerch] = useState(true);

    const { 
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity, 
        removeFromCart,
    } = useShoppingCart()

    return (
        <>
            <Navbar />
            <div className="shop-page">
                <h1 className="main-header-shop">OUR SHOP</h1>
                <div className="filter-buttons">
                    <label>
                        <input
                            type="checkbox"
                            onChange={() => setShowCoffee(!showCoffee)}
                            checked={showCoffee}/>
                            <span className="checkmark"> {showCoffee ? <ImCheckboxChecked/> : <ImCheckboxUnchecked/>} coffee</span>
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                            onChange={() => setShowMerch(!showMerch)}
                            checked={showMerch}/>
                            <span className="checkmark">{showMerch ? <ImCheckboxChecked/> : <ImCheckboxUnchecked/>} merch</span>
                    </label>
                </div>
                <div className="items">
                        {items.map(item => (
                            <>
                                {showCoffee && item.type == 'coffee' || showMerch && item.type == 'merch' ?
                                <div key={item.id} className="item">
                                    <div>
                                        <img src={item.image}/>
                                        <h1>{item.name}</h1>
                                        <h2>${item.price}</h2>
                                        <div>
                                            {getItemQuantity(item.id) === 0 ? (
                                                <button className="add-to-cart-button" onClick={() => increaseCartQuantity(item.id)}>add to cart</button>
                                            ) : <><div className="amount-in-cart">
                                                    <HiMinusCircle className="quantity-button" onClick={() => decreaseCartQuantity(item.id)}/>
                                                    <div>
                                                        <h4>{getItemQuantity(item.id)}</h4>
                                                    </div>
                                                    <HiPlusCircle className="quantity-button" onClick={() => increaseCartQuantity(item.id)}/>
                                                </div>
                                                <button className="remove-button" onClick={() => removeFromCart(item.id)}>remove from cart</button></>}
                                        </div>
                                    </div>
                                </div> : null}
                            </>
                        ))}
                        {!showMerch && !showCoffee ? <div className="button-message"><h1>search for shop items using the filter buttons above</h1></div> : null}
                </div>
            </div>
            <Footer/>
        </>
    )
}