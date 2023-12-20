import { MdOutlineRadioButtonChecked,MdOutlineRadioButtonUnchecked, MdDeleteForever } from "react-icons/md";
import { ButtonIcon } from "../ButtonIcon";
import { useEffect, useState } from "react";
import Quantity from "../ProductDetail/quantity";
import { useAuth } from "../../Store/store";


interface Product{
    id:number,
    title:string,
    image:string,
    quantity:number,
    price:number
}

interface Props{
    product:Product,
    removeToCarts:any
}
const Tr = ({ product, removeToCarts }:Props) => {
    const checkoutData=useAuth((state)=>state.data.checkout)

    const [quantity, setQuantity]=useState(product.quantity)
    const [checkout, setCheckout]=useState(
        checkoutData.findIndex((item)=>item.id==product.id)!==-1?true:false
    )
    
    console.log(checkoutData)
    const addCheckout=useAuth((state)=>state.addCheckOut)
    const removeCheckOut=useAuth((state)=>state.removeCheckOut)


    const handleCheckoutProduct=()=>{
        setCheckout(!checkout)
        if(checkout){
            removeCheckOut(product.id)
        }else{
            addCheckout({
                ...product,
                quantity
            })
        }
    }
    useEffect(()=>{
        if(checkout){
            addCheckout({
                ...product,
                quantity
            })
        }
    },[quantity])   

  return (
    <tr className="border-t-2 w-full text-center">
        <td className="pl-7">
            <ButtonIcon onClick={handleCheckoutProduct} Icon={checkout?MdOutlineRadioButtonChecked:MdOutlineRadioButtonUnchecked} className="block mx-auto drop-shadow-sm rounded-full" IconClassName={`text-3xl ${checkout?"text-red-500":"text-slate-200"}`} />
        </td>
        <td className="flex items-center justify-center gap-5 py-4">
            <img className="max-h-24" src={product.image} alt="" />
            <span className="text-slate-100 text-xl">{product.title.substring(0,product.title.lastIndexOf(" ",20))}</span>
        </td>
        <td>
           <div className="flex justify-center">
             <Quantity quantity={quantity} setQuantity={setQuantity} />
           </div>
        </td>
        <td>
            <span className="text-orange-500 text-2xl">{(quantity* product.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
        </td>
        <td>
            <ButtonIcon onClick={()=>removeToCarts(product.id)} className="group" Icon={MdDeleteForever} IconClassName="text-3xl text-red-700 group-hover:scale-110 transition-all duration-300" />
        </td>
    </tr>
  )
}

export default Tr
