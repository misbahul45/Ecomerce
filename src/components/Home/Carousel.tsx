import { useState, useEffect } from "react"
import { MdArrowForwardIos,MdArrowBackIosNew } from "react-icons/md";

const Carousel = () => {
    const [currentImg, setCurrentImg]=useState<number>(0)
    const [animate,setAnimate]=useState(false)
    const images=[
     "https://images.unsplash.com/photo-1603798125914-7b5d27789248?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1561365452-adb940139ffa?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1546213290-e1b492ab3eee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1519223400710-6da9e1b777ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImg((prevImg) => (prevImg === images.length - 1 ? 0 : prevImg + 1));
          setAnimate(true)
        }, 10000);
        return () => clearInterval(interval);
      }, [images.length]);

    useEffect(()=>{
        if(animate){
            setTimeout(()=>{
                setAnimate(false)
            },200)
        }
    },[animate])

      const handleNextImage=()=>{
        currentImg===images.length-1?setCurrentImg(0):setCurrentImg((prev)=>prev+1)
        setAnimate(true)
      }
      const handlePrevImage=()=>{
        currentImg===0?setCurrentImg(images.length-1):setCurrentImg((prev)=>prev-1)
        setAnimate(true)
      }
  return (
    <div className="relative lg:px-20 px-5 flex flex-col  items-center">
        <div className="lg:block hidden absolute left-12 top-1/2 -translate-y-1/2 bg-white rotate-45 w-16 h-16 group z-10">
            <button onClick={handlePrevImage} className="bg-purple-600 w-12 h-12 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:w-16 group-hover:h-16 transition-all duration-100">
                <MdArrowBackIosNew className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl -rotate-45" />
            </button>
        </div>
        <div className="w-full">
            <img className={`w-full md:h-[30rem] object-cover lg:rounded-sm rounded-lg shadow-2xl shadow-black/20 ${animate?"opacity-0":"opacity-100"} transition-all duration-200 drop-shadow-2xl`} src={images[currentImg]} alt="" />
            <div className="flex gap-1 justify-center mt-4">
                {
                images.map((_,index:number)=>(
                    <span onClick={()=>setCurrentImg(index)} key={index} className={`w-2 h-2 rounded-full  cursor-pointer ${currentImg==index?"bg-red-500 scale-125":"bg-purple-500"}`}></span>
                )) 
                }
            </div>
        </div>
        <div className="lg:block hidden absolute right-12 top-1/2 -translate-y-1/2 bg-white rotate-45 w-16 h-16 group z-10">
            <button onClick={handleNextImage} className="bg-purple-600 w-12 h-12 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:w-16 group-hover:h-16 transition-all duration-100">
                <MdArrowForwardIos className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl -rotate-45" />
            </button>
        </div>
    </div>
  )
}

export default Carousel
