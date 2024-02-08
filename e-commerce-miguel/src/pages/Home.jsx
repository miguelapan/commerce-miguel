import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import CategoryNav from "../components/CategoryNav";
import ProductList from "../components/ProductList";
import { ProductContext } from "../providers/ProductProvider";

function Home () {
    
    const { products, isLoading } = useContext(ProductContext) 
    const [selectedCategory, setSelectedCategory] = useState("TV")

    return <>
    {isLoading ? <div>LOADING</div> : null}

    <div className="banner">VÄLKOMMEN HIT OCH DRÖM OM VILKEN TV ELLER SÅ DU SKA KÖPA</div>
        <CategoryNav onCategorySelect={setSelectedCategory} />
        {products && <ProductList products={products} selectedCategory={selectedCategory}/>}
    
    </>
}

export default Home

// 
// 
// 
// 
// FIXA SYSTE MED TOKEN 
// 
// 
// 
// 