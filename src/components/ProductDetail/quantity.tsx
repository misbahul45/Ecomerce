import { FaMinus } from "react-icons/fa"
import { FaPlus } from "react-icons/fa"
interface QuantityProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}
const Quantity = ( { quantity, setQuantity }:QuantityProps) => {
    const handleMinus=():void=>{
        quantity==1?quantity:setQuantity((prev:number)=>prev-1)
    }
    const handlePlus=()=>{
        setQuantity((prev:number)=>prev+1)
    }
  return (
    <div className="flex items-cente gap-4">
      <button className={`px-2 bg-slate-500 rounded-sm ring-white ring-[1px] hover:scale-105 transition-all duration-300 ${quantity===1?"cursor-not-allowed":""}`} onClick={handleMinus}><FaMinus className="text-slate-50 text-sm" /></button>
      <span className="text-lg text-slate-100 font-semibold">{ quantity }</span>
      <button className="px-2 bg-red-700 rounded-sm ring-white ring-[1px] hover:scale-105 transition-all duration-300" onClick={handlePlus}><FaPlus className="text-slate-50 text-sm" /></button>
    </div>
  )
}

export default Quantity
