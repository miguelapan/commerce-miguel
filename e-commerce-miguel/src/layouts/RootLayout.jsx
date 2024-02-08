import { Outlet} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ProductProvider } from '../providers/ProductProvider'
import { AuthProvider } from '../providers/AuthProvider'


function RootLayout() {
    return<>
    <ProductProvider>
        <AuthProvider>
    <div className="wrapper-root">
    <Header />
    <main>
    <Outlet />
    </main>
    <Footer />
    </div>
        </AuthProvider>
    </ProductProvider>
        
    </>
}

export default RootLayout