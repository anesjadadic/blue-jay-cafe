import { useShoppingCart } from "../context/ShoppingCartContext"
import { items } from "../ShopList"
import { AiFillCloseSquare } from "react-icons/ai"

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem ({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart()
    const item = items.find(i => i.id === id)
    if (item == null) return null

    return (
        <div className="cart-item">
            <img src={item.image}/>
            <div className="cart-item-info">
                <h2>{item.name}</h2>
                <h3>${item.price} {quantity > 1 && <span> x{quantity}</span>}</h3>
            </div>
            <div className="cart-item-total">
                <h2>${(item.price * quantity).toFixed(2)}</h2>
                <AiFillCloseSquare
                    className="remove-item-button"
                    onClick={() => removeFromCart(item.id)} 
                />
            </div>
        </div>
    )
}