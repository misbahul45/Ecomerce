import { useQuery } from "@tanstack/react-query"
import { getAllProducts } from "../API/APi"
import Carousel from "../components/Carousel"
import { HomeInformation } from "../components/HomeInformation"
import HomeCategory from "../components/HomeCategory"


const Home = () => {
   const { data, isLoading, isError }=useQuery({
    queryKey:["products"],
    queryFn:getAllProducts
  })
  console.log(data)
  if(isError){
    alert("error")
  }
  return (
    <main className={`pt-20 bg-gradient-to-bl from-purple-800 to-purple-950 w-full min-h-screen  ${isLoading?"flex justify-center items-center":""}`}>
      {
        isLoading&&
      <>
        <span className="text-6xl text-purple-200 ">Loading...</span>
      </>
      }
      {
        data&&
        <div className="pb-5">
          <Carousel />
          <HomeInformation />
          <HomeCategory allData={data} />
        </div>
      }
    </main>
  )
}

export default Home
