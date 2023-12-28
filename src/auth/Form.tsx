import { useState } from "react"
import { FaEye } from "react-icons/fa"
import { FaRegEyeSlash } from "react-icons/fa6";
import { ButtonIcon } from "../components/ButtonIcon"
import { useMutation } from "@tanstack/react-query";
import { loginUser, signUpUser } from "../API/APi";
import {  useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";
import { UserData, useAuth } from "../Store/store";

const FormAuth = ({ signUp }:{ signUp:boolean }) => {
    const [userName,setUserName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const [checkPw, setheckPw]=useState(false)
    const navigate=useNavigate()

    const changeAuth=useAuth((state)=>state.changeAuth)

    const { mutate:mutateLogin }=useMutation({
        mutationKey:["login"],
        mutationFn:()=>loginUser({
            username:userName,
            password:password
        }),
        onSuccess:(data)=>{
            navigate('/')
            const userValue=jwtDecode(data.data.token) as UserData
            changeAuth({...userValue, carts:[], checkout:[]})
        }
    })
    const { mutate:mutateSignUp }=useMutation({
        mutationKey:["signUp"],
        mutationFn: async () => {
            const response = await signUpUser({
                username: userName,
                password: password,
                email:email
            });
            return response.data;
        },
        onSuccess:(data:{id:number})=>{
            navigate('/')
            const userValue={
                id:data.id,
                user:userName,
                password,
                email,
                carts:[],
                checkout:[]
            }
            changeAuth(userValue)
            setPassword('')
            setUserName('')
            setEmail('')
        }
    })

    const handleShowPw=()=>{
        setheckPw(!checkPw)
    }
    const handleLogin=async()=>{
        try{
            if(userName!==""&& password!==""){
                await mutateLogin()
            }else{
                alert("Somethings Wrong")
                setPassword('')
                setUserName('')
            }
        }catch(e){
            alert("please login again")
        }
    }

    const handleSignUp=async()=>{
        try{
            if(userName!==""&& password!=="" && email!==""){
                await mutateSignUp()
            }else{
                alert("Somethings Wrong")
                setEmail('')
                setPassword('')
                setUserName('')
            }
        }catch(e){
            alert("please sign  again")
        }
    }

  return (
    <form onSubmit={(e)=>e.preventDefault()} className="w-full lg:max-w-md lg:px-5 md:max-w-sm max-w-xs items-center justify-center">
        <label htmlFor="userName" className="w-full flex flex-col">
            <span className="text-lg mb-2 font-semibold text-slate-100">Username</span>
           <input value={userName} onChange={(e)=>setUserName(e.target.value)} className="px-4 py-1.5 outline-none rounded-md text-slate-800 font-semibold ring-2 focus:ring-orange-600 drop-shadow-xl" placeholder="example_name" type="text" id="userName" />
        </label>
        {
            signUp&& 
            <label htmlFor="email" className="w-full flex flex-col mt-5">
                <span className="text-lg mb-2 font-semibold text-slate-100">Email</span>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} className="px-4 py-1.5 outline-none rounded-md text-slate-800 font-semibold ring-2  invalid:focus:ring-pink-600 invalid:focus:text-pink-600 focus:ring-green-500 drop-shadow-xl" placeholder="example@gmail.com" type="email" id="email" />
            </label>
        }
        <label htmlFor="pw" className="w-full flex flex-col mt-5">
            <span className="text-lg mb-2 font-semibold text-slate-100">Password</span>
           <div className="relative">
            <input value={password} onChange={(e)=>setPassword(e.target.value)} className={`px-4 py-1.5 w-full outline-none rounded-md font-semibold ring-2 drop-shadow-xl ${password.length<5?"focus:ring-red-700 text-pink-500":" focus:ring-green-500 text-slate-800"}`} placeholder="*******" type={checkPw?'text':'password'} id="pw" />
            <ButtonIcon onClick={handleShowPw} Icon={checkPw?FaEye:FaRegEyeSlash} className="absolute right-3 top-1/2 -translate-y-1/2 hover:scale-110 transition-all duration-300" IconClassName="text-slate-900 text-xl"  />
           </div>
        </label>
        <button onClick={signUp?handleSignUp:handleLogin} type="button" className="mt-7 px-20 py-2 text-slate-50 font-bold text-lg bg-red-600 rounded-full hover:bg-red-700 hover:scale-105 transition-all duration-300">{signUp?"Sign Up":"Login"}</button>
    </form>
  )
}

export default FormAuth
