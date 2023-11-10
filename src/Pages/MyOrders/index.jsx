import { useContext } from "react"
import { v4 as uuidv4 } from 'uuid';
import { ShoppingCartContext } from "../../context"
import { dateTime } from "../../utils/"
import { Link } from "react-router-dom"
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"

function MyOrders() {
    const context = useContext(ShoppingCartContext)
    return (
    <>
        <Layout>
        <div className="flex items-center justify-center relative w-80 ">
            <h1>MyOrders</h1>
        </div>
        {
            context.order.map((order, index) => (
                <Link key={index} to={`/my-orders/${index}`}>
                    <OrdersCard
                        id={uuidv4()}
                        totalPrice={order.totalPrice}
                        totalProducts={order.totalProducts}
                        dateTime={dateTime}
                    />
                </Link>
            ))
        }
        </Layout>
    </>
    )
}

export default MyOrders