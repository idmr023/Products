import { useContext } from "react"
import { ShoppingCartContext } from "../../context"
import { AddIcon, CheckIcon } from "../Icons"

const AddItemButton = ({ isInCart, onItemAdded }) => {
  if ( isInCart ) {
    return (
      <div className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1">
        <CheckIcon className="w-6 h-6 text-white" />
      </div>
    )
  }

  return (
    <div
      className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
      onClick={onItemAdded}
    >
      <AddIcon className="w-6 h-6 text-black" />
    </div>
  )
}

export default function Card({ data }) {
  const context = useContext(ShoppingCartContext)

  const showProduct = () => {
    context.openProductDetail()
    context.setProductToShow(data)
    context.closeCheckoutSideMenu()
  }

  const addToCart = (event) => {
    event.stopPropagation();

    const newCartProducts = [...context.cartProducts, data]
    context.setCartProducts(newCartProducts)
    context.setCount(context.count + 1)
    context.openCheckoutSideMenu()
    context.closeProductDetail()
  }

  const isInCart = !!context.cartProducts.find(product => product.id === data.id)
  
  const titleProduct = () => { //Si el título tiene más de 40 carácteres, retornar las primeras 40 letras y luego ...
    if (data.title.length > 40) {
      return data.title.slice(0,40) + ' ... '
    }  else {
      return data.title
    }
  }

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60"
      onClick={showProduct}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-full text-black text-xs px-3 py-1 m-2">
          { data.category.name }
        </span>
        <img className="w-full h-full object-cover rounded-lg" src={data.images[0]} alt={data.title} />

        <AddItemButton
          isInCart={isInCart}
          onItemAdded={addToCart}
        />
      </figure>

      <p className="flex justify-between items-center">
        <span className="text-sm font-light">
          { titleProduct() }
        </span>
        <span className="text-lg font-medium">
          ${ data.price }
        </span>
      </p>
    </div>
  )
}