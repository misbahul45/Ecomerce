import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router"
import { getAllProducts, getOneProduct } from "../API/APi"
import DisplayProduct from "../components/ProductDetail/DisplayProduct"
import ProductItem from "../components/ProductItem"
import { DisplayProducts } from "../components/Home/HomeCategory"
import { useEffect } from "react"


const ProductDetail = () => {
    const { id }=useParams()
    const { data:product, isLoading, isError, refetch }=useQuery({
        queryKey:["product"],
        queryFn:()=>getOneProduct(id),
        onSuccess: (data, variables) => {
            if (variables[1] !== id) {
              refetch();
            }
        }
    })
    const { data:products, isLoading:productsLoading }=useQuery({
        queryKey:["produts"],
        queryFn:getAllProducts
    })
 
    useEffect(() => {
        refetch();
      }, [id, refetch]);

    if(isError){
        alert('something wrong')
    }
  return (
    <div  className="pt-20 pb-5 min-h-screen flex justify-center items-center bg-gradient-to-bl from-purple-800 to-purple-950">
        {    
            isLoading?
            <h1 className="text-6xl text-slate-100">Loading...</h1>
            :
            <div className="w-full">
                <DisplayProduct product={product} />
                <div></div>
                <div className="relative pb-20 mt-10 pl-10 flex overflow-x-scroll no-scrollbar gap-5">
                    {!productsLoading&&
                        products.map((product:DisplayProducts,index:number)=>(
                                <ProductItem
                                    key={index}
                                    id={product.id}
                                    title={product.title}
                                    description={product.description}
                                    price={product.price}
                                    image={product.image}
                                    rate={product.rating.rate}
                                    product="product"
                                />
                        ))
                    }
                </div>
            </div>
        }
    </div>
  )
}

export default ProductDetail
