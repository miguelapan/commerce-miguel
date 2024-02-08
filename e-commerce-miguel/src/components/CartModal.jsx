import { useEffect } from "react"
import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { ProductContext } from "../providers/ProductProvider"
import CartItems from "./CartItems"

function CartModal ({open, onClose}) {
    const {cartItems, orderHandler, isOrderCompleted} = useContext(ProductContext)
    const { token } = useContext(AuthContext)

    if(!open) return null


    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    const order = {
            products: cartItems.map(item => ({
                productId: item._id,
                quantity: 1
            })) 
        }

    return<>
<div className="cart-container">
    <h2 onClick={onClose}>CART</h2>

    {cartItems.map((item, index) => (
        <CartItems key={index} item={item} />
        ))}
        <p className="price">TOTAL: {totalPrice.toFixed(2)} SEK</p>

    <div className="cart-buttons">
        {isOrderCompleted ? <p>ORDER COMPLETED</p> : null}
    <button onClick={() => orderHandler("https://js2-ecommerce-api.vercel.app/api/orders", order, token)}  className="btn-checkout">CHECKOUT/BUY</button>
    <button onClick={onClose}>CLOSE</button>
    </div>
</div>
</>
}

export default CartModal