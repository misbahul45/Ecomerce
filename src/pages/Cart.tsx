import { useState } from "react"
import { useAuth } from "../Store/store"
import Tr from "../components/Cart/Tr"
import { Link } from "react-router-dom"
import { AuthState } from "../components/Navbar";



const Cart = () => {
  const dataUser=useAuth((state)=>state.data) as AuthState
  const [carts,setCarts]=useState(dataUser.carts)
  const [checkoutData,setCheckoutData]=useState(dataUser.checkout)
  
  const totalPrice=(checkoutData.map((checkout)=>(checkout.price*checkout.quantity)).reduce((a:number,b:number)=>a+b,0))
  const checkoutProduct=checkoutData.map((data)=>data.quantity).reduce((a:number,b:number)=>a+b,0)
  return (
    <div className="relative pt-24 lg:px-20 sm:px-5 px-2  bg-gradient-to-bl from-purple-800 to-purple-950">
      <div className={`w-full ${carts.length>0?"min-h-screen":"h-96"} pb-10 no-scrollbar`}>
      {
        carts.length>0?
          <table className="w-full border-2">
          <thead>
            <tr>
              <th className="py-2 text-slate-100 lg:text-lg text-sm font-semibold">List</th>
              <th className="py-2 text-slate-100 lg:text-lg text-sm font-semibold">Product</th>
              <th className="py-2 text-slate-100 lg:text-lg text-sm font-semibold">Quantity</th>
              <th className="py-2 text-slate-100 lg:text-lg text-sm font-semibold">total price</th>
              <th className="py-2 text-slate-100 lg:text-lg text-sm font-semibold sm:pr-0 pr-2">Delete</th>
            </tr>
          </thead>
          <tbody>
          {
            carts.map((product)=>(
              <Tr  setCheckoutData={setCheckoutData} setCarts={setCarts} carts={carts} key={product.id}  product={product} />
            ))
          }
          </tbody>
        </table>
        :
        <h1 className="text-5xl text-center mt-32 text-slate-100 font-semibold opacity-60">No Checkout Products</h1>
      }
      </div>
      {
        checkoutData.length>0&&
        <div className="fixed bottom-0 left-0 w-full h-16 bg-[url('src/assets/bg.svg')] bg-center flex items-center gap-4 lg:justify-end justify-between lg:pr-10 px-5 z-20">
          <h1 className="text-slate-100 lg:text-xl font-semibold">Total Products : {checkoutProduct} </h1>
          <span className="text-orange-500 lg:text-3xl text-lg font-semibold">
            {totalPrice.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
            })}
          </span>
          <Link to={'/checkout'}>
            <button className="lg:px-4 px-2 lg:py-2.5 py-1 bg-red-500 text-slate-50 font-semibold rounded-md ring-2 ring-slate-50 hover:bg-red-600 hover:shadow-lg hover:shadow-red-600 hover:scale-105 transition-all duration-300">Checkout Now</button>
          </Link>
        </div>
      }
    </div>
  )
}

export default Cart
