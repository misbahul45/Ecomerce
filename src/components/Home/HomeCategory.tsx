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
    image: string;
    rating: {
        rate: number;
    };
}
interface Category{
    category:string
}

const HomeCategory = ({allData=[]}:categoryProp) => {
    const [currentDisplay, setCurrenDisplay]=useState<number>(0)
    const allCategory : string[] = useMemo(() =>[...new Set(allData.map((datum:Category)=>datum.category))] , [allData])
    const displayCategory={
        title:allCategory[currentDisplay],
        data:useMemo(()=>allData.filter((data:Category)=>data.category===allCategory[currentDisplay]).slice(0,4),[currentDisplay,allData,allCategory])
    }
    const handlePrev=()=>{
        currentDisplay===0?setCurrenDisplay(allCategory.length-1):setCurrenDisplay((prev)=>prev-1)
    }
    const handleNext=()=>{
        currentDisplay===allCategory.length-1?setCurrenDisplay(0):setCurrenDisplay((prev)=>prev+1)
    }
  return (
    <div className="relative lg::h-[85vh] flex flex-col gap-3 sm:items-center sm:gap-16 lg:px-10 sm:px-2 px-10  mt-5 pb-20">
        <h1 className="text-center md:text-5xl text-4xl text-white font-semibold">Category</h1>
       <div className="h-auto max-h-full">
            <h2 className="text-slate-50 sm:mb-1 mb-5 md:text-4xl text-3xl capitalize font-semibold font-serif">{displayCategory.title}</h2>
            <div className="w-full">
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-7 md:gap-16 sm:gap-7 gap-5">
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
        <ButtonIcon onClick={handlePrev} Icon={FaArrowLeft} text={'Prev'} className="absolute bottom-0 sm:left-20 left-6 flex items-center gap-2 bg-blue-500 px-5 py-2 rounded-md group hover:bg-blue-700 transition-all duration-200" IconClassName="text-2xl text-slate-100 group-hover:animate-ping group-hover:text-red-500" textClassName="text-lg font-semibold text-slate-50" />
        <ButtonIcon onClick={handleNext} Icon={FaArrowRight} text={'Next'} className="absolute bottom-0 sm:right-20 right-6 flex flex-row-reverse items-center gap-2 bg-blue-500 px-5 py-2 rounded-md group hover:bg-blue-700 transition-all duration-200" IconClassName="text-2xl text-slate-100 group-hover:animate-ping group-hover:text-red-500" textClassName="text-lg font-semibold text-slate-50" />
    </div>
  )
}

export default HomeCategory
