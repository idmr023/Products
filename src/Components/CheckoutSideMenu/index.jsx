import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../context"
import { totalPrice } from "../../utils"
import { CloseIcon } from "../Icons"
import OrderCard from "../OrderCard"

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
        context.setCounter(context.counter - 1)
    }

    const handleCheckout = () => {
        const productos = context.cartProducts
        const orderToAdd = {
            date: '01.02.23',
            products: productos,
            totalProducts: productos.length,
            totalPrice: totalPrice(productos)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setCount(0);
        context.closeCheckoutSideMenu()
    }

    return (
        
        <aside 
            className="flex-col fixed right-0 border bg-white border-black rounded-lg  overflow-y-scroll w-[360px] h-[calc(100vh-80px)]>">
            <div className="flex justify-between item-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <div onClick={() => context.closeCheckoutSideMenu()}>
                    <CloseIcon/>
                </div>
            </div>
            <div className="px-6 overflow-y-auto flex-1">
            {
                context.cartProducts.map((product, index) => (
                    <OrderCard
                    key={index}
                    title={product.title}
                    images={product.images}
                    price={product.price}
                    handleDelete={handleDelete}
                    />
                ))
            }
            </div>
            <div className="px-6 mb-6">
                <p className='flex justify-between items-center mb-2'> 
                    <span className="font-light">Total:</span>
                    <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button className="bg-black py-3 text-white w-full rounded-lg" onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu