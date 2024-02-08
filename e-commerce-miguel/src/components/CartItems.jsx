function CartItems ({ item }) {

return (
<div className="cart-product-div">
    <p>{item.name}</p>
    <p>PRICE: {item.price} SEK</p>
    </div>
)
}

export default CartItems