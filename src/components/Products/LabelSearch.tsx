import { useFilter } from "../../Store/store"

const LabelSearch = ({data}:{data:string}) => {
    const dataFilter=useFilter((state)=>state.data)
    const changeData=useFilter((state)=>state.changeData)
    const changeSearch=useFilter((state)=>state.changeSearch)
    const handleChangeData=()=>{
        changeData(data)
        changeSearch("")
    }
    return(
        <label htmlFor={data} className="flex items-center gap-2 w-[11rem] cursor-pointer group">
            <input onChange={handleChangeData} checked={dataFilter===data} className="w-5 h-5" type="checkbox" name="" id={data} />
            <span className="text-lg capitalize text-slate-100 group-hover:text-red-400 group-hover:scale-105 transition-all duration-300">{data}</span>
        </label>
    )
}
export default LabelSearch
