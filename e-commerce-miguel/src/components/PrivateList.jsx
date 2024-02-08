import { useEffect } from "react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider"
import { ProductContext } from "../providers/ProductProvider"

function PrivateList () {

    const navigate = useNavigate()

    const {logout, token, username } = useContext(AuthContext)
    const { privateFetcher, privateProducts } = useContext(ProductContext)

    // HÄMTA PRIVATE GREJER 

    useEffect(() => {
        privateFetcher("https://js2-ecommerce-api.vercel.app/api/products", token)
    },[token])

    useEffect(() => {
        console.log(privateProducts)
    },[privateProducts])

    function logOutHandler() {
        logout()
        navigate('/')
    }

    return<>
    <h1>WELCOME TO {username} PAGE</h1>
    <h2>HERES YOUR LIST WITH PURCHASED ITEMS</h2>
    <ul className="purchased-list">
        
    </ul>
    <button onClick={() => logOutHandler()} >LOGOUT</button>
    </>
}

export default PrivateList