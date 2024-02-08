import { Link } from 'react-router-dom'

function ProductList ({products, selectedCategory}) {

    return<>
    {products && products
    .filter((element) => element.category === selectedCategory)
    .map(element => {
        return (
            <div  className="product-container" key={element._id}>
                <p>{element.name}</p>
                <Link to={'/products'}>
                <img 
                className="img-buy" 
                src={element.images[1]} alt="" />
                </Link>
                        </div>
            )
        })}
        </>

}

export default ProductList