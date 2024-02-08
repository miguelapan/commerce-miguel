import { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoMain from '../assets/svg/LogoMain'
import { AuthContext } from '../providers/AuthProvider'
import CartModal from './CartModal'

function Header () {
    
    const [openModal, setOpenModal] = useState(false)

    const {isLoggedIn, logout, username} = useContext(AuthContext)

    return <>

    <header>
        <Link to={'/'}>
    <LogoMain/>
        </Link>
    <nav>
        <ul>
            <li><Link to={'/'}>HOME</Link></li>
            <li><Link to={'/products'}>PRODUCTS</Link></li>
            <li><Link to={'/contacts'}>CONTACTS</Link></li>
        </ul>
    </nav>
    <div className="cart">
        {isLoggedIn ? <Link to={'/private'}>{username}</Link> : null}
        {!isLoggedIn ? <Link to={'/login'}>LOG IN</Link> : <button onClick={() => logout()}>LOG OUT</button>}
    
    <div onClick={() => setOpenModal(true)}>CART</div>
    <CartModal open={openModal} onClose={() => setOpenModal(false)}></CartModal>

    </div>
    </header>
    </>
}

export default Header