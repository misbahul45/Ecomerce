import { useState,useEffect } from "react"
import { useNavigate } from "react-router"

enum navbar{
    home="Home",
    products="Products",
    search="Search",
    login="Login",
    signup="SignUp"
}
export const Navbar = () => {
    const [navbarPosition, setNavbarPosition]=useState(navbar.home)
    const navigate=useNavigate()
    const [bg,setBg]=useState(false)

    const handleRoute=(route:string)=>{
        if(route==="Home"){
            navigate('/')
            setNavbarPosition(navbar.home)
        }else if(route==="Products"){
            navigate('/products')
            setNavbarPosition(navbar.products)
        }else if(route==="Search"){
            navigate('/search')
            setNavbarPosition(navbar.search)
        }else if(route==="Login"){
            navigate('/login')
            setNavbarPosition(navbar.login)
        }else{
            navigate('/signUp')
            setNavbarPosition(navbar.signup)
        }
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
  return (
    <header className={`${bg?"bg-purple-700 shadow-2xl shadow-white/10":""} fixed left-0 top-0 flex flex-row-reverse md:flex-row justify-between items-center w-full h-16 px-10 z-30`}>
        <div className="hidden md:flex gap-3 items-center">
            <button onClick={()=>handleRoute(navbar.home)} className={`button-navbar ${navbarPosition===navbar.home?"ring-2 ring-purple-400":""}`}>Home</button>
            <button onClick={()=>handleRoute(navbar.products)} className={`button-navbar ${navbarPosition===navbar.products?"ring-2 ring-purple-400":""}`}>Products</button>
            <button onClick={()=>handleRoute(navbar.search)} className={`button-navbar ${navbarPosition===navbar.search?"ring-2 ring-purple-400":""}`}>Search</button>
        </div>
        <div className="flex gap-4">
            <button onClick={()=>handleRoute(navbar.login)} className="px-6 py-2 bg-blue-500 font-semibold text-slate-50 rounded-md shadow-md shadow-black/10 hover:bg-blue-600 transition-all duration-300">Login</button>
            <button onClick={()=>handleRoute(navbar.signup)} className="px-6 py-2 bg-purple-600 font-semibold text-slate-50 rounded-md border-2 border-purple-400 hover:bg-purple-700 transition-all duration-300">Sign Up</button>
        </div>
    </header>
  )
}
