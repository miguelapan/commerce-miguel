import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { httpService } from "../components/httpService";

const ProductContext = createContext();

const PRODUCT_URL = 'https://js2-ecommerce-api.vercel.app/api/products'

const ProductProvider = ({children}) => {
const [products, setProducts] = useState(null)
const [isLoading, setIsLoading] = useState(true)
const [inquiryMessage, setInquiryMessage] = useState(null)
const [cartItems, setCartItems] = useState([])
const [isInquiryCompleted, setIsInquiryCompleted] = useState(false)
const [isOrderCompleted, setIsOrderCompleted] = useState(false)
const [privateProducts, setPrivateProducts] = useState(null)

// HÄMTA ALLA GET 

async function productFetcher(url) {
    try{
        const {data} = await httpService.get(url)   
        setProducts(data)
    }catch(error){
        console.error(error)
    }
    setIsLoading(false)
}

// HÄMTA PRIVATE 
async function privateFetcher(url, token) {
    try{
        const {data} = await httpService.get(url, token)
        setPrivateProducts(data)
    }catch(error){
        console.error(error)
    }
}

// SKICKA EN ORDER 

async function orderHandler(url, order, token) {
    try{
        const {data} = await httpService.post(url, order, token)
    }catch(error){
        console.error(error)
    }
    setIsOrderCompleted(true)

} 



// SKICKA IN MESSAGE 

async function inquiryHandler(url, message) {
    try{
        const {data} = await httpService.post(url, message)
        setInquiryMessage(data)
    }catch(error){
        console.error(error)
    }
    setIsInquiryCompleted(true)
}

// LÄGGA TILL I CART 


const addToCart = (product) => {
    setCartItems(prevCartItems => [...prevCartItems, product])
}


useEffect(() => {
    productFetcher(PRODUCT_URL)
},[])

return (
    <ProductContext.Provider value={{products, isLoading, isInquiryCompleted, inquiryHandler, orderHandler, isOrderCompleted, addToCart, cartItems, privateFetcher, privateProducts}}>
        {children}
    </ProductContext.Provider>
)

}

export { ProductContext, ProductProvider}