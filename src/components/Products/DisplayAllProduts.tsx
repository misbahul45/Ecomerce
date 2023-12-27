import { useEffect, useMemo, useState } from "react";
import {  useFilter } from "../../Store/store";
import ProductItem from "../ProductItem";

export interface DisplayProducts{
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    rating: {
        rate: number,
        count:number
    };
}
const DisplayAllProduts = ({ dataProducts }: { dataProducts: [] }) => {
  const [allProductsDisplay, setAllProductsDisplay] = useState([]);
  const dataFilter = useFilter((state) => state.data);
  const searchFilter=useFilter((state)=>state.search)
  const sortingData=useFilter((state)=>state.sortingData)

  const filteringProducts = useMemo(
    () =>
      dataProducts.filter((product:{title:string,price:number, category:string}) => {
        if (dataFilter === "all"||dataFilter === "cheapest"|| dataFilter === "expensive"|| dataFilter=== "Best Seller") {
          return true;
        }else if(dataFilter===""){
          return product.title.toLowerCase().includes(searchFilter.toLowerCase())
        }else{
          return product.category === dataFilter;
        }
      }).sort((a:DisplayProducts,b:DisplayProducts)=>{
        if(sortingData==="cheapest"){
            return a.price-b.price
        }else if(sortingData==="expensive"){
            return b.price-a.price
        }else if(sortingData==="Best Seller"){
          return b.rating.rate-a.rating.rate
        }
        return 0
      }),
      [dataProducts, dataFilter, searchFilter, sortingData]
  );


  useEffect(() => {
    setAllProductsDisplay(filteringProducts);
  }, [filteringProducts]);

  return(
    <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-7 lg:px-10 sm:px-16 px-8">
        {
            allProductsDisplay.map((product:DisplayProducts,index:number)=>(
                <ProductItem
                    key={index}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                    rate={product.rating.rate}
                />
            ))
        }
    </div>
  );
};

export default DisplayAllProduts;