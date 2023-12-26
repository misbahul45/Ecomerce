import { FaStar, FaStarHalfAlt,FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavbar } from "../Store/store";

interface ProductItemProp{
    id:number,
    title:string,
    description:string,
    price:number,
    image:any,
    rate:number,
    product?:string,
}
const ProductItem = ({ id,title,description, image, price, rate, product="" }:ProductItemProp) => {
    const changeNavbar=useNavbar((state)=>state.changeNavbar)
        const star=[]
        for(let i=1; i<=5;i++){
           if(i === Math.ceil(rate) && rate > (Math.floor(rate)+0.5)){
            star.push(<FaStarHalfAlt key={i} className="text-yellow-400" />)
           }else if(rate>i){
            star.push(<FaStar key={i} className="text-yellow-400" />)
           }else{
           star.push(<FaRegStar key={i} className="text-yellow-400" />)
           }
        }
        
        const handleClick=()=>{
            changeNavbar('Products')
            if(product==="product"){
                window.scrollTo({
                    top:0,
                    behavior:'smooth'                   
                })
            }
        }

  return (
    <Link onClick={handleClick} to={`/product/detail/${id}`}>
        <div className="bg-white flex flex-col justify-between h-[21rem] w-64 rounded-md border-[1.5px] px-2 py-3 mt-2 hover:shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300">
            <img alt="product" className="object-cover w-full max-h-44" src={image} />
            <h1 className="mt-2 text-xl text-slate-900 font-semibold">{title.substring(0,title.lastIndexOf(" ",22))}</h1>
            <p className="text-md text-slate-900">{description.substring(0,description.lastIndexOf(" ",50))}....</p>
            <div className="flex justify-between items-center">
                    <span className="text-xl text-red-500 font-semibold">{price.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        })}
                    </span>
                    <div className="flex gap-0.5">
                        {star}
                    </div>
            </div>
        </div>
    </Link>
  )
}

export default ProductItem
