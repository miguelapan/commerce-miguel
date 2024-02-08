import { Outlet } from "react-router-dom"
import '../styles/loginLayout.css'
import Header from "../components/Header"
import { AuthProvider } from "../providers/AuthProvider"
import { ProductProvider } from "../providers/ProductProvider"

function LoginLayout () {
    return <>
    <AuthProvider>
    <ProductProvider>
    <div className="wrapper-login">
    <Header />
    <Outlet />
    </div>
    </ProductProvider>
    </AuthProvider>
    </>
}

export default LoginLayout