import { useEffect, useMemo, useState } from "react";
import { useFilter } from "../../Store/store";
import ProductItem from "../ProductItem";

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
const DisplayAllProduts = ({ dataProducts }: { dataProducts: [] }) => {
  const [allProductsDisplay, setAllProductsDisplay] = useState([]);
  const dataFilter = useFilter((state) => state.data);
  const searchFilter=useFilter((state)=>state.search)

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
      }).sort((a,b)=>{
        if(dataFilter==="cheapest"){
            return a.price-b.price
        }else if(dataFilter==="expensive"){
            return b.price-a.price
        }else if(dataFilter==="Best Seller"){
          return b.rating.rate-a.rating.rate
        }
      }),
    [dataFilter,searchFilter]
  );


  useEffect(() => {
    setAllProductsDisplay(filteringProducts);
  }, [filteringProducts]);

  return(
    <div className="mt-10 grid grid-cols-4 gap-8 px-10">
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