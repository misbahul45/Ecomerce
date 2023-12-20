import { FaStar, FaStarHalfAlt, FaRegStar, FaCartPlus, FaTruckPickup } from "react-icons/fa"
import Quantity from "./quantity"
import { useState } from "react"
import { useAuth } from "../../Store/store"
interface Product{
    title:string,
    image:string,
    rating:{
        rate:number,
        count:number
    },
    description:string,
    price:number
}

interface Props{
    product:Product
}


const DisplayProduct = ({product}:Props) => {
    const [quantity, setQuantity]=useState<number>(1)
    const user=useAuth((state)=>state.data)
    const addToCarts=useAuth((state)=>state.addToCarts)
    console.log(user)

    const rate=product.rating.rate
    let star=[]
    for(let i=1; i<=5;i++){
       if(i === Math.ceil(rate) && rate > (Math.floor(rate)+0.5)){
        star.push(<FaStarHalfAlt key={i} className="text-yellow-400 text-sm" />)
       }else if(rate>i){
        star.push(<FaStar key={i} className="text-yellow-400 text-sm" />)
       }else{
       star.push(<FaRegStar key={i} className="text-yellow-400 text-sm" />)
       }
    }
    const handleaddToCart=()=>{
        addToCarts({
            ...product,
             quantity 
           })
    }
  return (
    <div className="flex w-full px-20 gap-10">
        <div className="flex justify-center items-center">
            <img src={product.image} className="max-h-96" />
        </div>
        <div className="flex-1 flex flex-col items-start">
            <h1 className="text-4xl text-slate-50 font-bold font-serif">{product.title}</h1>
            <span className="mt-2 flex items-center">{star}</span>
            <p className=" mt-4 text-lg text-slate-200">{product.description}</p>
            <p className="mt-4 flex flex-col">
                <span className="text-3xl text-orange-600 font-semibold">{product.price.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        })}
                </span>
                 <span className="text-gray-400 text-md line-through italic">
                    {(product.price*120/100).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        })} </span>
             </p>
            <div className="mt-4 ml-5 flex items-center gap-3">
                <Quantity quantity={quantity} setQuantity={setQuantity}  />
                <span className="text-slate-300 text-xl">{product.rating.count} amount </span>
            </div>
            <div className="flex items-center gap-6 mt-8">
                <button onClick={handleaddToCart} className="flex items-center justify-center gap-4 w-48 h-11 bg-orange-600 ring-2 ring-slate-100 rounded-full hover:bg-yellow-600 hover:scale-105 transition-all duration-300">
                    <FaCartPlus className="text-xl text-slate-100" />
                    <span className="font-semibold text-sm font-serif text-slate-100">Add To Cart</span>
                </button>
                <button className="flex items-center justify-center gap-4 w-48 h-11 bg-red-600 ring-2 ring-slate-100 rounded-full hover:bg-green-600 hover:scale-105 transition-all duration-300">
                    <FaTruckPickup className="text-xl text-slate-100" />
                    <span className="font-semibold text-sm text-slate-100">Checkout</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default DisplayProduct
