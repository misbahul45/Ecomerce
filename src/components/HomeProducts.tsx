import { FaStar, FaStarHalfAlt,FaRegStar } from "react-icons/fa";

interface HomeProductsProp{
    title:string,
    description:string,
    price:number,
    image:any,
    rate:number
}
const HomeProducts = ({ title,description, image, price, rate }:HomeProductsProp) => {
        let star=[]
        for(let i=1; i<=5;i++){
            console.log(i)
            console.log(rate)
           if(i === Math.ceil(rate) && rate > (Math.floor(rate)+0.5)){
            star.push(<FaStarHalfAlt key={i} className="text-yellow-400" />)
           }else if(rate>i){
            star.push(<FaStar key={i} className="text-yellow-400" />)
           }else{
           star.push(<FaRegStar key={i} className="text-yellow-400" />)
           }
        }

  return (
    <div className="bg-[url('/public/bg.svg')] rounded-md border-[1.5px] px-5 py-3 mt-2">
        <img className="object-cover w-full max-h-44" src={image} alt="" />
        <h1 className="mt-2 mb-1 text-xl text-slate-50 ">{title.substring(0,title.lastIndexOf(" ",22))}</h1>
        <p className="text-sm text-slate-50">{description.substring(0,description.lastIndexOf(" ",50))}....</p>
       <div className="flex justify-between">
            <span className="text-xl text-green-500 font0bold">{price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                })}
            </span>
            <div className="flex gap-0.5">
                {
                 star 
                }
            </div>
       </div>
    </div>
  )
}

export default HomeProducts
