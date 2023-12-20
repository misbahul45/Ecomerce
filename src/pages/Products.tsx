import { getAllProducts } from "../API/APi"
import { useQuery } from "@tanstack/react-query"
import Poster from "../components/Products/Poster"
import DisplayAllProduts from "../components/Products/DisplayAllProduts"
const Products = () => {
    const { data, isLoading, isError }=useQuery({
        queryKey:["products"],
        queryFn:getAllProducts
      })
    
      if(isError){
        alert("error")
      }
      return (
        <main className={`min-h-screen relative pt-16 bg-gradient-to-bl from-purple-800 to-purple-950 w-full pb-5 ${isLoading?"flex justify-center items-center":""}`}>
          {
            isLoading&&
          <>
            <span className="text-6xl text-purple-200 ">Loading...</span>
          </>
          }
          {
            data&&
              <div className="flex flex-col pb-5">
                <Poster data={data} />
                <DisplayAllProduts dataProducts={data} />
             </div>
          }
        </main>
      )
}

export default Products
