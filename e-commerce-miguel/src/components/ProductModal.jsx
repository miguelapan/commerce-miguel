import { useContext } from "react"
import { ProductContext } from "../providers/ProductProvider"

function ProductModal({open, onClose, productModal, onBuy}) {

    const { addToCart } = useContext(ProductContext)

    if(!open) return null

    return <>
        <div className="modal-product-container">
    <div onClick={onClose} className="product-modal">
    <p>{productModal}</p>
    <button onClick={onClose}>CLOSE</button>
        </div>
    </div>
    </>
}

export default ProductModal