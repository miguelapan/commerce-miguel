import { useRef } from "react"
import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"

function Registration ({open, onClose}) {
    if(!open) return null

    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const rePasswordRef = useRef(null)

    const { login, isAuthCompleted } = useContext(AuthContext)

    

    function registrationHandler(e) {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const rePassword = rePasswordRef.current.value;

        if(email === ""){
            console.log('email empty')
        }else if(password != rePassword){
            console.log('lösenord stämmer ej')
        }
        const newUser = {
            "email": email,
            "password": password
        }
        console.log('register complete')
        login("https://js2-ecommerce-api.vercel.app/api/auth/register", newUser)
    }

    
    return <>


        <form action="" className="modal-registration" onSubmit={(e) => registrationHandler(e)}>
    <h2>REGISTER HERE</h2>
        <label htmlFor="email-registration" className="label">EMAIL</label>
        <input ref={emailRef} type="email" className="email-registration" id="email-registration" />
        
        <label htmlFor="password-registration" className="label" >PASSWORD</label>
        <input ref={passwordRef} type="password" className="password-registration" id="password-registration"/>
        
        <label htmlFor="rePassword-registration" className="label">PASSWORD AGAIN</label>
        <input ref={rePasswordRef} type="password" className="rePassword-registration" id="rePassword-registration"/>
        {isAuthCompleted && <div>YOU ARE NOW REGISTERED</div>}
        <button className="btn-register">REGISTER</button>

        <button onClick={onClose}>CLOSE</button>
    </form>
    </>
}

export default Registration