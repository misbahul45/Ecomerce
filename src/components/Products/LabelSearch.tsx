import { useFilter } from "../../Store/store"

const LabelSearch = ({data}:{data:string}) => {
    const dataFilter=useFilter((state)=>state.data)
    const sortingData=useFilter((state)=>state.sortingData)
    const changeData=useFilter((state)=>state.changeData)
    const changeSearch=useFilter((state)=>state.changeSearch)
    const changeSortingData=useFilter((state)=>state.changeDataSorting)
    const handleChangeData=()=>{
        if(data !== "cheapest" && data !== "expensive" && data !== "Best Seller") {
            changeData(data);
          }else{  
            sortingData!==""&&sortingData===data?changeSortingData(""):changeSortingData(data )
          }
          
        changeSearch("")
    }
    return(
        <label htmlFor={data} className="flex items-center gap-2 w-[11rem] cursor-pointer group">
            <input onChange={handleChangeData} checked={data !== "cheapest" && data !== "expensive" && data !== "Best Seller"?dataFilter===data:sortingData==data} className={`w-5 h-5 cursor-pointer`} type="checkbox" name="" id={data} />
            <span className="text-lg capitalize text-slate-100 group-hover:text-red-400 group-hover:scale-105 transition-all duration-300">{data}</span>
        </label>
    )
}
export default LabelSearch
