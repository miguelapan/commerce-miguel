import { useContext } from "react";
import { useState } from "react"
import ProductList from "../components/ProductList";
import ProductModal from "../components/ProductModal";
import { ProductContext } from "../providers/ProductProvider";

function Products ({}) {

    const { products, isLoading, addToCart } = useContext(ProductContext)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [productModal, setProductModal] = useState(null)

    function modalOpener(description) {
        setIsModalOpen(true)
        setProductModal(description)
    }


    return <>

{isLoading ? <div>LOADING</div> : null}

<ProductModal open={isModalOpen} onClose={() => setIsModalOpen(false)} productModal={productModal}>
</ProductModal>
{products && <ProductList products={products} />}
    {products && products
    .map(element => {
        return (
            <div  className="product-container" key={element._id} data-description={element.description}>
                <p>{element.name}</p>
                <img onClick={() => modalOpener(element.description)} className="img-buy" src={element.images[0]} alt="" />
                <p>{element.price} sek</p>
                <button className="btn-buy" onClick={() => addToCart(element)}>add to cart</button>
                        </div>
            )
        })}

    </>
}

export default Products