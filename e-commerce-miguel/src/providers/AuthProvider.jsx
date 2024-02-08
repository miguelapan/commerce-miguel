import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { authService } from "../components/httpService";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(null)
    const [isAuthCompleted, setIsAuthCompleted] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(()=> {
        return localStorage.getItem('isLoggedIn') === 'true';
    });
    const [username, setUsername] = useState(
        localStorage.getItem('username') || ''
        );

    console.log(isLoggedIn)
    // SAVE TOKEN 

    useEffect(() => {
        const storedToken = localStorage.getItem('accesstoken')
        if(storedToken)
        setToken(storedToken)
    },[])

    // LOGIN ANG REGISTER 
    
    async function login(url, authName) {
        try{
            const { data } = await authService.post(url, authName)   
            setToken(data.token)
            localStorage.setItem('accesstoken', data.token)
            setIsAuthCompleted(true)
            setIsLoggedIn(true)
            localStorage.setItem('isLoggedIn', 'true')
            setUsername(authName.email)
            localStorage.setItem('username', authName.email) 
        }catch(error){
            console.log('errormessage')
            console.error(error)
        }
    }

    const logout = () => {
        localStorage.removeItem('accesstoken')
        setToken(null)
        setIsLoggedIn(false)
        localStorage.setItem('isLoggedIn', 'false')
        localStorage.removeItem('username')
    } 

    return (
        <AuthContext.Provider value={{ token, login, isAuthCompleted, logout, isLoggedIn, username}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider}