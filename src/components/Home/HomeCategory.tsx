import { useMemo, useState } from "react"
import { ButtonIcon } from "../ButtonIcon"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import ProductItem from "../ProductItem";

interface categoryProp{
    allData?:[]
}
export interface DisplayProducts{
    id: number;
    title: string;
    description: string;
    price: number;
    image: any;
    rating: {
        rate: number;
    };
}
interface Category{
    category:string
}

const HomeCategory = ({allData=[]}:categoryProp) => {
    const [currentDisplay, setCurrenDisplay]=useState(0)
    const allCategory : string[] = useMemo(() =>[...new Set(allData.map((datum:Category)=>datum.category))] , [allData])
    const displayCategory={
        title:allCategory[currentDisplay],
        data:useMemo(()=>allData.filter((data:Category)=>data.category===allCategory[currentDisplay]).slice(0,4),[allData,currentDisplay])
    }
    const handlePrev=()=>{
        currentDisplay===0?setCurrenDisplay(allCategory.length-1):setCurrenDisplay((prev)=>prev-1)
    }
    const handleNext=()=>{
        currentDisplay===allCategory.length-1?setCurrenDisplay(0):setCurrenDisplay((prev)=>prev+1)
    }
  return (
    <div className="relative h-[85vh] flex flex-col gap-3 px-10 mt-5 pb-20">
        <h1 className="text-center text-5xl text-white font-semibold">Category</h1>
       <div className="h-auto max-h-full">
            <h2 className="text-slate-50 mb-1 text-4xl capitalize font-semibold font-serif">{displayCategory.title}</h2>
            <div className="w-full">
                <div className=" grid grid-cols-4 gap-7">
                {
                    displayCategory.data.map((display:DisplayProducts ,index: number) => (
                        <ProductItem
                            key={index}
                            id={display.id}
                            title={display.title}
                            description={display.description}
                            price={display.price}
                            image={display.image}
                            rate={display.rating.rate}
                        />
                    ))
                }
                </div>
            </div>
        </div> 
        <ButtonIcon onClick={handlePrev} Icon={FaArrowLeft} text={'Prev'} className="absolute bottom-0 left-20 flex items-center gap-2 bg-blue-500 px-5 py-2 rounded-md group hover:bg-blue-700 transition-all duration-200" IconClassName="text-2xl text-slate-100 group-hover:animate-ping group-hover:text-red-500" textClassName="text-lg font-semibold text-slate-50" />
        <ButtonIcon onClick={handleNext} Icon={FaArrowRight} text={'Next'} className="absolute bottom-0 right-20 flex flex-row-reverse items-center gap-2 bg-blue-500 px-5 py-2 rounded-md group hover:bg-blue-700 transition-all duration-200" IconClassName="text-2xl text-slate-100 group-hover:animate-ping group-hover:text-red-500" textClassName="text-lg font-semibold text-slate-50" />
    </div>
  )
}

export default HomeCategory
