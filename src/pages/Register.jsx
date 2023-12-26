import { Link, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import { useState } from "react"
import axios from 'axios'
import {URL} from '../url'
import benzinterior from '../assets/benzinterior.jpg'
import Navbar from "../components/Navbar"


const Register = () => {

  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)
  const navigate=useNavigate()

  const handleRegister=async ()=>{
    
    try{
      const res=await axios.post(URL+"/api/auth/register",{firstName,lastName,email,password})
      setFirstName(res.data.firstName)
      setLastName(res.data.lastName)
      setEmail(res.data.email)
      setPassword(res.data.password)
      setError(false)
      navigate("/login")
      
    }
    catch(err){
      setError(true)
      console.log(err)
    }

  }

  

  return (
    <div className="bg-[#FAEFE9]">
  
    <Navbar/>
   
  


    <h1 className="text-2xl font-bold text-center text-black mt-6">Sign Up Form</h1>

      
       
    <div className="flex md:flex-row flex-col justify-center space-x-12 items-center h-[100vh]">
         <img src={benzinterior} alt="" className="w-[500px] h-[350px] object-cover " />

         <div className="">
         <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-9">Full Name</label>
            <input onChange={(e)=>setFirstName(e.target.value)} type="text" id="first_name" class="bg-[#FAEFE9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g johndoe@gmail.com" required />

            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2">Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} type="text" id="first_name" class="bg-[#FAEFE9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g johndoe@gmail.com" required />
        
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2">Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} type="text" id="first_name" class="bg-[#FAEFE9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="******" required />
        
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2">Confirm Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} type="text" id="first_name" class="bg-[#FAEFE9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="******" required />
        
          {/* <label >Enter Email</label>
         <input onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-2  border border-gray-300 rounded-lg mt-2" type="text" placeholder="Enter your email" /> */}

         {/* <label className="mt-4">Enter Password</label>
         <input onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-2  border border-gray-300 rounded-lg mt-4" type="password" placeholder="Enter your password" /> */}
         <button onClick={handleRegister} className="w-full px-4 py-4 text-lg font-bold text-white bg-gray-500 rounded-lg hover:bg-black hover:text-white mt-9">Sign Up</button>
         {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>}
         <div className="flex justify-center items-center space-x-3 mt-6">
          <p className="text-green-800">New here?</p>
          <p className="text-gray-500 hover:text-black"><Link to="/register">Sign Up</Link></p>
         </div>
        </div>




    </div>
    <Footer/>
    </div>
    
  )
}

export default Register