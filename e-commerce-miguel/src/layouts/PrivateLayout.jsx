import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
import { AuthProvider } from '../providers/AuthProvider'
import { ProductProvider } from '../providers/ProductProvider'
import '../styles/privateLayout.css'

function PrivateLayOut () {
    return <>
    <AuthProvider>
        <ProductProvider>

    <div className="wrapper-private">
    <Header />
    <Outlet />
    </div>
        </ProductProvider>
    </AuthProvider>
    </>
}

export default PrivateLayOut