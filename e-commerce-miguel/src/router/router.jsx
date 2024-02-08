import { createBrowserRouter } from "react-router-dom"
import LoginLayout from "../layouts/LoginLayout"
import RootLayout from "../layouts/RootLayout"
import Contacts from "../pages/Contacts"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import Products from "../pages/Products"
import LoginForm from "../pages/LoginForm"
import Registration from "../pages/Registration"
import PrivateLayOut from "../layouts/PrivateLayout"
import PrivateList from "../components/PrivateList"


export const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {path: "/", index: "true", element: <Home />},
        {path: "/products", index: "true", element: <Products />},
        {path: "/contacts", index: "true", element: <Contacts />},
        {path: "/registration", index: "true", element: <Registration />},
        {path: "*", element: <NotFound/>}
      ]
    },
    {
      path: "/login",
      element: <LoginLayout/>,
      children: [
        {path: "", index: true, element: <LoginForm/>}, 
        {path: "*", index: true, element: <NotFound/>}   
      ]
    },
    {
      path: "/private",
      element: <PrivateLayOut/>,
      children: [
        {path: "", index: true, element: <PrivateList/>}
      ]
    }
  ])