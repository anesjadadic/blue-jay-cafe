import { items } from "../ShopList";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { IoMdCloseCircle } from "react-icons/io"

type ShoppingCartProps = {
    isOpen: boolean;
}

export function ShoppingCart( props: ShoppingCartProps ) {
    const { isOpen } = props;
    const { cartQuantity, closeCart, cartItems } = useShoppingCart();

    return (
        <>
            <div className={isOpen ? 'cart-open' : 'cart-closed'}>
                <div className="cart-header">
                    {cartQuantity === 1 && 
                    <h1>{cartQuantity} item in cart</h1>}
                    {cartQuantity > 1 && 
                    <h1>{cartQuantity} items in cart</h1>}
                    <IoMdCloseCircle 
                        className="close-cart-button"
                        onClick={closeCart}
                    />
                </div>
                <div className="cart-body">
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />))
                    }
                    {cartQuantity === 0 && 
                    <h4>there are currently no items in your cart</h4>}
                    {cartQuantity > 0 &&
                    <div className="cart-checkout">
                        <h1>
                            Total: ${(cartItems.reduce((total, cartItem) => {
                            const item = items.find(i => 
                                i.id === cartItem.id)
                                return total + (item?.price || 0) * cartItem.quantity
                            }, 0)).toFixed(2)}
                        </h1>
                        <button>checkout</button>
                    </div>}
                </div>
            </div>
        </>
    );
}