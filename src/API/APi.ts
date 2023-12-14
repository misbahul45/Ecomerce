import axios from "axios";

const BASEAPI=axios.create({baseURL:"https://fakestoreapi.com"})

export const getAllProducts=async()=>{
    const data=await BASEAPI.get("/products")
    return data.data
}
export const getOneProduct=async(id:any)=>{
    const data=await BASEAPI.get(`/products/${id}`)
    return data.data
}