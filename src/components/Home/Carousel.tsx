import { useState, useEffect } from "react"
import { MdArrowForwardIos,MdArrowBackIosNew } from "react-icons/md";

const Carousel = () => {
    const [currentImg, setCurrentImg]=useState<number>(0)
    const [animate,setAnimate]=useState(false)
    const images=[
     "/public/c-1.avif",
     "/public/c-2.avif",
     "/public/c-3.avif",
     "/public/c-4.avif",
     "/public/c-5.avif",
     "/public/c-6.avif",
     "/public/c-7.avif",
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
    <div className="relative px-20 flex flex-col  items-center">
        <div className="absolute left-12 top-1/2 -translate-y-1/2 bg-white rotate-45 w-16 h-16 group z-10">
        <button onClick={handlePrevImage} className="bg-purple-600 w-12 h-12 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:w-16 group-hover:h-16 transition-all duration-100">
            <MdArrowBackIosNew className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl -rotate-45" />
        </button>
        </div>
        <div className="w-full">
            <img className={`w-full h-[30rem] object-cover rounded-sm ${animate?"opacity-0":"opacity-100"} transition-all duration-200 drop-shadow-2xl`} src={images[currentImg]} alt="" />
            <div className="flex gap-1 justify-center mt-4">
                {
                images.map((img,index:number)=>(
                    <span onClick={()=>setCurrentImg(index)} key={index} className={`w-2 h-2 rounded-full  cursor-pointer ${currentImg==index?"bg-red-500 scale-125":"bg-purple-500"}`}></span>
                )) 
                }
            </div>
        </div>
        <div className="absolute right-12 top-1/2 -translate-y-1/2 bg-white rotate-45 w-16 h-16 group z-10">
            <button onClick={handleNextImage} className="bg-purple-600 w-12 h-12 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:w-16 group-hover:h-16 transition-all duration-100">
                <MdArrowForwardIos className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl -rotate-45" />
            </button>
        </div>
    </div>
  )
}

export default Carousel
