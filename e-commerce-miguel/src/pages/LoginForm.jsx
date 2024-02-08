import { useRef } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'
import Registration from './Registration'

function LoginForm () {

    const navigate = useNavigate();

    const { login, isLoggedIn } = useContext(AuthContext);
    
    const [isOpen, setIsOpen] = useState(false)
    const [isSuccessMessage, setIsSuccessMessage] = useState(false)
    
    
    
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    
    
    async function loginChecker(e) {
            e.preventDefault()
            const username = usernameRef.current.value
            const password = passwordRef.current.value
    
            if(username === "" || password === "") return null
            const authentication = {
                "email": username,
                "password": password
            }     
            try{
                const response = await login("https://js2-ecommerce-api.vercel.app/api/auth/login", authentication)
                if(response)
                navigate('/private')
                setIsSuccessMessage('YOU ARE LOGGED IN AS: ' + username)
            }catch(error){
                console.error("ERROR IN LOGIN")
            }
                }
    


    return <>
    <div className="form-container">
    <form className='form' action="" onSubmit={e => loginChecker(e)}>
        <label htmlFor="username-label" className="username">USERNAME</label>
        <input ref={usernameRef} type="text" className="username-input" />
        <label htmlFor="" className="password-label">PASSWORD</label>
        <input ref={passwordRef} type="password" className="password-input" />
        <button className="btn-submit">LOGIN</button>
    </form>
                <h3>{isSuccessMessage}</h3>
        <button onClick={() => setIsOpen(true)}>NOT A USER YET?</button>
            <Registration open={isOpen} onClose={() => setIsOpen(false)}>
        </Registration>
    </div>

    </>

}

export default LoginForm



