import { useContext } from "react"
import { ShoppingCartContext } from "../../context"
import Layout from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard"
import OrdersCard from "../../Components/OrdersCard"
import { Link } from "react-router-dom"
import { ChevronLeftIcon } from "../../Components/Icons"

function MyOrder() {
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/')+1)
    console.log(index)
    if (index === 'last') index = context.order?.length - 1 

    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-6">
                <Link to="/my-orders" className="absolute left-0">
                    <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer"/>
                </Link>
                <h1>MyOrder</h1>
            </div>
            <div className="flex flex-col w-80">
                {
                context.order?.[index]?.products.map(product => (
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        images={product.images}
                        price={product.price}
                    />
                    ))
                
                }
            </div>
        {
            context.order.map((order, index) => {
                <Link key={index} to={`/my-orders/${order.id}`}>
                    <OrdersCard
                        totalPrice={order.totalPrice}
                        totalProducts={order.totalProducts}
                    />
                </Link>
            })
        }
        </Layout>
    )
}
export default MyOrder