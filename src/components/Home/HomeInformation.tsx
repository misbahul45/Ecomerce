import { MdKeyboardArrowRight } from "react-icons/md"
import { ButtonIcon } from "../ButtonIcon"
import { useNavigate } from "react-router"
import { useNavbar } from "../../Store/store"
export const HomeInformation = () => {
    const navigate=useNavigate()
    const changeNavbar=useNavbar((state)=>state.changeNavbar)
    const goToProduts=()=>{
        navigate('/products')
        changeNavbar("Products")
    }
  return (
    <div className=" bg-[url('/src/assets/bg.svg')] flex lg:flex-row flex-col lg:gap-0 gap-5 justify-center items-center lg:h-[80vh] lg:py-0 py-20 mt-10 px-7 lg:px-0">
        <div className="flex-1 lg:px-10">
            <div className="flex-col justify-center items-center mb-5">
                <h2 className="text-4xl font-semibold text-slate-50 mb-5">Providing the best product choices</h2>
                <p className="text-lg text-justify tracking-wide text-slate-100">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius laudantium possimus repellat, officiis ducimus adipisci, harum esse eligendi temporibus veritatis numquam autem fugit eaque blanditiis cumque illo provident dignissimos sunt expedita facilis suscipit natus quo perferendis aspernatur. Nam mollitia officia culpa nisi? Sint sunt libero corporis magnam adipisci laudantium. Similique.</p>
            </div>
            <ButtonIcon onClick={goToProduts} Icon={MdKeyboardArrowRight} text={"Check's Our Products"} className=" flex flex-row-reverse items-center px-4 py-1 rounded-full bg-blue-500 hover:bg-blue-800 group transition-all hover:drop-shadow  duration-300" IconClassName="text-3xl text-white group-hover:animate-ping transition-all duration-300" textClassName="text-sm font-semibold text-slate-100"  />
        </div>
        <div className="flex-1 grid md:grid-cols-2 grid-cols-1 gap-3 sm:px-20 w-full">
            <div className="flex flex-col items-center justify-center lg:w-48 lg:h-48 md:w-40 md:h-40 w-full h-48 bg-cyan-500 rounded-lg shadow-xl border-[1px] border-slate-300 hover:drop-shadow-2xl hover:shadow-white/40 transition-all duration-300">
                <h2 className="text-5xl font-semibold text-blue-900">1000<span className="text-6xl text-orange-600 animate-pulse">+</span></h2>
                <p>Products</p>
            </div>
            <div className="flex flex-col items-center justify-center lg:w-48 lg:h-48 md:w-40 md:h-40 w-full h-48 bg-cyan-500 rounded-lg shadow-xl border-[1px] border-slate-300 hover:drop-shadow-2xl hover:shadow-white/40 transition-all duration-300">
                <h2 className="text-5xl font-semibold text-blue-900">100<span className="text-6xl text-orange-600 animate-pulse">+</span></h2>
                <p>Users</p>
            </div>
            <div className="flex flex-col items-center justify-center lg:w-48 lg:h-48 md:w-40 md:h-40 w-full h-48 bg-cyan-500 rounded-lg shadow-xl border-[1px] border-slate-300 hover:drop-shadow-2xl hover:shadow-white/40 transition-all duration-300">
                <h2 className="text-5xl font-semibold text-blue-900">20<span className="text-6xl text-orange-600 animate-pulse">+</span></h2>
                <p>Countries</p>
            </div>
            <div className="flex flex-col items-center justify-center lg:w-48 lg:h-48 md:w-40 md:h-40 w-full h-48 bg-cyan-500 rounded-lg shadow-xl border-[1px] border-slate-300 hover:drop-shadow-2xl hover:shadow-white/40 transition-all duration-300">
                <h2 className="text-5xl font-semibold text-blue-900">50<span className="text-6xl text-orange-600 animate-pulse">+</span></h2>
                <p>Joint Venture</p>
            </div>
        </div>
    </div>
  )
}
