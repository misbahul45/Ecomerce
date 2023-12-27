import { FaArrowCircleUp } from "react-icons/fa"
import { ButtonIcon } from "./ButtonIcon"
import { FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { Link } from "react-router-dom"
const Footer = () => {
    const handleToTop=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
  return (
    <div className="relative w-full bg-[url('/src/assets/bg.svg')] bg-center lg:px-32 sm:px-12 px-1 text-center">
        <ButtonIcon onClick={handleToTop} Icon={FaArrowCircleUp} className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-100 rounded-full shadow-lg shadow-white/10 hover:scale-105 transition-all duration-200" IconClassName="text-4xl text-red-700" />
        <div className="w-full flex lg:flex-row flex-col  gap-5 lg:justify-between items-center py-5">
            <div className="flex-1">
                <h1 className="lg:text-3xl text-2xl font-bold font-serif text-red-400">Knixxen <span className="text-orange-600">Shop</span></h1>
                <p className="lg:text-justify text-center text-md text-slate-200">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis qui cumque ipsum maiores iste suscipit corrupti dicta possimus molestiae vero a asperiores consectetur accusantium aliquid, culpa enim labore? Recusandae, repudiandae?</p>
            </div>
            <div className="flex-1 flex flex-col gap-2 justify-center items-end">
                <h1 className="text-xl font-bold font-serif text-red-400">Join <span className="text-orange-600">With Us</span></h1>
                <div className="flex items-center gap-2">
                    <Link to={'https://www.instagram.com/misbahul_enggine/'}>
                     <ButtonIcon Icon={FaInstagram} className="p-1.5 border-2 rounded-full bg-gradient-to-tr bg-orange-500 hover:scale-110  hover:border-red-500 hover:bg-red-500 transition-all duration-300" IconClassName="text-slate-50 text-xl" />
                    </Link>
                    <Link to={'https://www.linkedin.com/in/misbahul-muttaqin-b87b78255/'}>
                      <ButtonIcon Icon={FaLinkedinIn} className="p-1.5 border-2 rounded-full bg-blue-500 hover:bg-blue-700 hover:border-blue-700 hover:scale-110 transition-all duration-300" IconClassName="text-slate-50 text-xl" />
                    </Link>
                   <ButtonIcon Icon={FaWhatsapp} className="p-1.5 border-2 rounded-full bg-green-500 hover:bg-green-600 hover:border-green-600 hover:scale-110 transition-all duration-300" IconClassName="text-slate-50 text-xl" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
