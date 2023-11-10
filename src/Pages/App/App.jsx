import './App.css'
import { BrowserRouter, useParams, useRoutes } from 'react-router-dom'
import { ShoppingCartContext, ShoppingCartProvivder } from '../../context'
import Navbar from '../../Components/Navbar'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import SignIn from '../SignIn'
import NotFound from '../NotFound'
import { useContext, useEffect } from 'react'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'

const AppRoutes = () => {
  const { category } = useParams();
  const context = useContext(ShoppingCartContext);
  
  const navDer = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/furnitures', element: <Home /> },
    { path: '/toys', element: <Home /> },
    { path: '/othes', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
    
  ])

  return navDer;
}

function App() {

  return (
    <>
    <ShoppingCartProvivder>
    <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
      <CheckoutSideMenu/>
    </BrowserRouter>
    </ShoppingCartProvivder>
    </>
  )
}

export default App