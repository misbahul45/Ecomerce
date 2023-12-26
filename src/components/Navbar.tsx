import { useState,useEffect } from "react"
import { useNavigate } from "react-router"
import { useAuth, useLogout, useNavbar } from "../Store/store"

import { FaCartFlatbed } from "react-icons/fa6";
import { ButtonIcon } from "./ButtonIcon";

enum navbar{
    home="Home",
    products="Products",
    login="Login",
    signup="SignUp",
}
export interface Product{
    id:number,
    title:string,
    image:string,
    quantity:number,
    price:number
}
export interface Data {
    product: Product;
    quantity: number;
    id: number;
    title: string;
    image: string;
    price: number;
  }
  
export interface AuthState {
    user:string;
    carts:Data[];
    checkout:Data[];

}
export const Navbar = () => {
    const userLogOut=useLogout((state)=>state.changeLogout)
    const userAuth=useAuth((state)=>state.data) as AuthState
    const changeAuth=useAuth((state)=>state.changeAuth)

    const carts=userAuth.carts
    const name=userAuth.user||""

    const navigate=useNavigate()
    const [bg,setBg]=useState(false)

    const dataNavbar=useNavbar((state)=>state.data)
    const changeNavbar=useNavbar((state)=>state.changeNavbar)
    const [navbarPosition, setNavbarPosition]=useState(dataNavbar)

    const handleRoute=(route:string)=>{
        if(route==="Home"){
            navigate('/')
            changeNavbar(navbar.home)
        }else if(route==="Products"){
            navigate('/products')
            changeNavbar(navbar.products)
        }else if(route==="Login"){
            navigate('/login')
            changeNavbar(navbar.login)
        }else{
            navigate('/signUp')
            changeNavbar(navbar.signup)
        }
    }

    const handleToCart=()=>{
        navigate('/cart')
    }
    const handleLogOut=()=>{
        userLogOut(userAuth)
        changeAuth({})
        navigate('/login')
    }

    useEffect(()=>{
        const handleScroll=()=>{
          if(window.scrollY>10){
            setBg(true)
           }else{
            setBg(false)
           }
        }
        window.addEventListener("scroll",handleScroll)
        return()=>{
          window.removeEventListener("scroll",handleScroll)
        }
      },[])
      useEffect(()=>{
        setNavbarPosition(dataNavbar)
      },[dataNavbar])
  return (
    <header className={`${bg?"bg-purple-700 shadow-2xl shadow-white/10":""} fixed left-0 top-0 flex flex-row-reverse md:flex-row justify-between items-center w-full h-16 px-10 z-30`}>
        <div className="hidden md:flex gap-3 items-center">
            <button onClick={()=>handleRoute(navbar.home)} className={`button-navbar ${navbarPosition===navbar.home?"ring-2 ring-purple-400":""}`}>Home</button>
            <button onClick={()=>handleRoute(navbar.products)} className={`button-navbar ${navbarPosition===navbar.products?"ring-2 ring-purple-400":""}`}>Products</button>
        </div>
        <div className="flex gap-4">
           {
            name?
            <>
                <ButtonIcon onClick={handleToCart } Icon={FaCartFlatbed} text={carts.length>0?carts.length:""}  className="relative p-1.5 hover:bg-gray-100 hover:scale-110 rounded-full transition-all duration-300" IconClassName="text-blue-500 text-3xl" textClassName="absolute -top-1 right-0 text-sm text-green-500 font-bold px-1.5 rounded-full bg-white" />
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-600"></span>
                    <h1 className="text-2xl text-slate-100 font-bold font-serif">{name}</h1>
                </div>
                <button onClick={handleLogOut} className="px-6 py-2 bg-red-600 text-slate-100 hover:bg-orange-900 transition-all duration-300 font-semibold rounded-full">Logout</button>
            </>
            :
            <>
                <button onClick={()=>handleRoute(navbar.login)} className="px-6 py-2 bg-blue-500 font-semibold text-slate-50 rounded-md shadow-md shadow-black/10 hover:bg-blue-600 transition-all duration-300">Login</button>
                <button onClick={()=>handleRoute(navbar.signup)} className="px-6 py-2 bg-purple-600 font-semibold text-slate-50 rounded-md border-2 border-purple-400 hover:bg-purple-700 transition-all duration-300">Sign Up</button>
            </>
           }
        </div>
    </header>
  )
}
