import { MdOutlineRadioButtonChecked,MdOutlineRadioButtonUnchecked, MdDeleteForever } from "react-icons/md";
import { ButtonIcon } from "../ButtonIcon";
import { useEffect, useState } from "react";
import Quantity from "../ProductDetail/quantity";
import { useAuth } from "../../Store/store";
import { AuthState, Product } from "../Navbar";
import { Data } from "../Navbar";


interface Props {
    product: Product;
    setCarts: React.Dispatch<React.SetStateAction<Data[]>>;
    setCheckoutData: React.Dispatch<React.SetStateAction<Data[]>>;
    carts: Data[]; 
}



const Tr = ({ product, setCarts, setCheckoutData }:Props) => {
    const dataUser=useAuth((state)=>state.data) as AuthState

    const checkoutData=dataUser.checkout as Data[]
    const [quantity, setQuantity]=useState<number>(product.quantity)
    const [checkout,setCheckout]=useState(checkoutData.findIndex((d)=>d.id===product.id)!==-1?true:false)

    const addToCarts=useAuth((state)=>state.addToCarts)
    const removeToCarts=useAuth((state)=>state.removeToCarts)
    const addToCheckout=useAuth((state)=>state.addCheckOut)
    const removeCheckout=useAuth((state)=>state.removeCheckOut)



    const handleCheckoutProduct=()=>{
        setCheckout(!checkout)
        if(!checkout){
            addToCheckout({
                ...product,
                quantity
            })
            setCheckoutData(checkoutData)
        }else{
            removeCheckout(product.id)
            setCheckoutData(prev=>prev.filter((p)=>p.id!==product.id))
        }
    }
    const handleDelete=()=>{
        removeCheckout(product.id)
        removeToCarts(product.id)
        setCarts(prev=>prev.filter((p)=>p.id!==product.id))
        setCheckoutData(prev=>prev.filter((p)=>p.id!==product.id))

    }


    useEffect(() => {
        if (checkout) {
            addToCheckout({
                ...product,
                quantity,
            });
            setCheckoutData((prev) => {
                prev.forEach((d, i) => {
                    if (d.id === product.id) {
                        prev[i].quantity = quantity;
                    }
                });
                return [...prev];
            });
        } else {
            addToCarts({
                ...product,
                quantity,
            });
        }
    }, [quantity, addToCarts, addToCheckout, checkout, product, setCheckoutData]);
     

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
            <ButtonIcon onClick={handleDelete} className="group" Icon={MdDeleteForever} IconClassName="text-3xl text-red-700 group-hover:scale-110 transition-all duration-300" />
        </td>
    </tr>
  )
}

export default Tr
