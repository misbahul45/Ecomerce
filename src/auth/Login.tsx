import { Link } from "react-router-dom"
import FormAuth from "./Form"


export const Login = () => {
  return (
    <main className="h-screen flex flex-col gap-5 justify-center items-center bg-[url('/public/bg.svg')] bg-cover">
      <h1 className="text-5xl text-slate-100 font-serif font-semibold">Welcome</h1>
      <FormAuth signUp={false} />
      <p className="text-slate-200">Dont't have an account? <Link to={'/signUp'}><span className="underline text-blue-500 hover:text-blue-300 cursor-pointer transition-all duration-300">SignUp</span></Link></p>
    </main>
  )
}
