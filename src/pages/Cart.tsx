import { useState } from "react"
import { useAuth } from "../Store/store"
import Tr from "../components/Cart/Tr"


const Cart = () => {
  const dataUser=useAuth((state)=>state.data)
  const carts=dataUser.carts
  const checkOutData=dataUser.carts
  const totalPrice=Math.ceil(checkOutData.map((checkout)=>(checkout.price*checkout.quantity)).reduce((a,b)=>a+b,0))
  const removeToCarts=useAuth((state)=>state.removeToCarts)


  return (
    <div className="relative pt-24 px-20 bg-gradient-to-bl from-purple-800 to-purple-950">
      <div className="w-full h-screen overflow-y-scroll pb-10 no-scrollbar">
        <table className="w-full border-2">
          <thead>
            <tr>
              <th className="py-2 text-slate-100 text-lg font-semibold">List</th>
              <th className="py-2 text-slate-100 text-lg font-semibold">Product</th>
              <th className="py-2 text-slate-100 text-lg font-semibold">Quantity</th>
              <th className="py-2 text-slate-100 text-lg font-semibold">total price</th>
              <th className="py-2 text-slate-100 text-lg font-semibold">Delete</th>
            </tr>
          </thead>
          <tbody>
           {
            carts.map((product)=>(
              <Tr removeToCarts={removeToCarts}  key={product.id}  product={product} />
            ))
           }
          </tbody>
        </table>
      </div>
      <div className="fixed bottom-0 left-0 w-full h-16 bg-[url('/public/bg.svg')] bg-center flex items-center gap-4 justify-end pr-10">
        <h1 className="text-slate-100 text-xl font-semibold">Total Products : {checkOutData.length} </h1>
        <span className="text-green-600 text-3xl">$ {totalPrice}</span>
        <button className="px-4 py-2.5 bg-red-500 text-slate-50 font-semibold rounded-md ring-2 ring-slate-50 hover:bg-red-600 hover:shadow-lg hover:shadow-red-600 hover:scale-105 transition-all duration-300">Checkout Now</button>
      </div>
    </div>
  )
}

export default Cart
