import { Link } from "react-router-dom"
import FormAuth from "./Form"


export const SignUp = () => {
  return (
    <main className="h-screen flex flex-col gap-5 justify-center items-center bg-[url('/src/assets/bg.svg')] bg-cover">
      <h1 className="text-5xl text-slate-100 font-serif font-semibold">Sign Up</h1>
      <FormAuth signUp={true} />
      <p className="text-slate-200">Have an account? <Link to={'/login'}><span className="underline text-blue-500 hover:text-blue-300 cursor-pointer transition-all duration-300">Login</span></Link></p>
  </main>
  )
}
