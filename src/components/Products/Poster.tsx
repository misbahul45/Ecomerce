import { useMemo, useState } from "react"
import LabelSearch from "./LabelSearch"
import { FaSearch } from "react-icons/fa"
import { ButtonIcon } from "../ButtonIcon"
import { useFilter } from "../../Store/store"
const Poster = ({data}:{ data:[] }) => {
    const changeFilterData=useFilter((state)=>state.changeData)
    const changeSearch=useFilter((state)=>state.changeSearch)
    const [productName, setProductName]=useState('')
    const allCategory=useMemo(()=>[... new Set(data.map((item:{ category:string })=>item.category))],[data])
    const handleSearchProduct=()=>{
        if(productName!==""){
            changeSearch(productName)
            changeFilterData("")
            setProductName('')
        }
    }
  return (
    <div className="w-full bg-[url('/public/bg.svg')] bg-center h-56 py-1 rounded-b-full shadow-xl shadow-white/30">
        <h1 className="text-center my-4 text-5xl font-semibold font-sans text-slate-100 ">Get The Best Products</h1>
            <div className="flex-1 flex flex-col items-center gap-4">
                <div className="flex items-center">
                    <LabelSearch data="all" />
                    {
                        allCategory.map((category:string)=>(
                           <LabelSearch key={category} data={category} />
                        ))
                    }   
                </div>
                <div className="flex justify-center items-center">
                    <LabelSearch data="cheapest" />
                    <LabelSearch data="expensive" />
                    <LabelSearch data="Best Seller" />
                </div>
                <form onSubmit={(e)=>e.preventDefault()} className="relative w-full max-w-sm">
                    <input value={productName} onChange={(e)=>setProductName(e.target.value)} className="w-full pl-5 py-1.5 rounded-full bg-white/5 ring-[2px] ring-slate-100 text-slate-100 outline-none capitalize opacity-60 focus:ring-red-600 focus:opacity-100 placeholder:text-slate-50" type="text" id="search"  placeholder="search"/>
                    <ButtonIcon onClick={handleSearchProduct} Icon={FaSearch} className="absolute top-1/2 -translate-y-1/2 -right-16 text-slate-50 p-4 bg-red-500 rounded-full shadow-xl opacity-70 hover:opacity-100 transition-all duration-300" />
                </form>
            </div>    
    </div>
  )
}

export default Poster
