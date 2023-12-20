import { useQuery } from "@tanstack/react-query"
import { getAllProducts } from "../API/APi"
import Carousel from "../components/Home/Carousel"
import { HomeInformation } from "../components/Home/HomeInformation"
import HomeCategory from "../components/Home/HomeCategory"


const Home = () => {
   const { data, isLoading, isError }=useQuery({
    queryKey:["products"],
    queryFn:getAllProducts
  })
  if(isError){
    alert("error")
  }
  return (
    <main className={`min-h-screen relative pt-20 bg-gradient-to-bl from-purple-800 to-purple-950 w-full pb-5 ${isLoading?"flex justify-center items-center":""}`}>
      {
        isLoading&&
      <>
        <span className="text-6xl text-purple-200 ">Loading...</span>
      </>
      }
      {
        data&&
          <div className="flex flex-col pb-5">
            <Carousel />
            <HomeInformation />
            <HomeCategory allData={data} />
         </div>
      }
    </main>
  )
}

export default Home
