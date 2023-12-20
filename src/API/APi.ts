import axios from "axios";

const BASEAPI=axios.create({baseURL:"https://fakestoreapi.com"})

export const getAllProducts=async()=>{
    const data=await BASEAPI.get("/products")
    return data.data
}
export const getOneProduct=async(id:number)=>{
    const data=await BASEAPI.get(`/products/${id}`)
    return data.data
}

export const loginUser=async(data:{username:string, password:string})=>{
    return await BASEAPI.post('/auth/login',data)
}
export const signUpUser=async(data:{})=>{
    return await BASEAPI.post('/users',data)
}