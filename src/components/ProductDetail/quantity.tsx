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
    <div className="flex items-cente lg:gap-4 gap-3">
      <button className={`lg:px-2 px-1 bg-slate-500 rounded-sm ring-white ring-[1px] hover:scale-105 transition-all duration-300 ${quantity===1?"cursor-not-allowed":""}`} onClick={handleMinus}><FaMinus className="text-slate-50 lg:text-sm text-xs" /></button>
      <span className="lg:text-lg text-sm text-slate-100 font-semibold">{ quantity }</span>
      <button className="lg:px-2 px-1 text-s bg-red-700 rounded-sm ring-white ring-[1px] hover:scale-105 transition-all duration-300" onClick={handlePlus}><FaPlus className="text-slate-50 lg:text-sm text-xs" /></button>
    </div>
  )
}

export default Quantity
