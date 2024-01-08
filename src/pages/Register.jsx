import { Link, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import { useState } from "react"
import axios from 'axios'
import {URL} from '../url'
import benzinterior from '../assets/benzinterior.jpg'
import Navbar from "../components/Navbar"


const Register = () => {

  const [firstName,setFirstName]=useState("")
  // const [lastName,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)
  const navigate=useNavigate()

  const handleRegister=async ()=>{
    
    try{
      const res=await axios.post(URL+"/api/auth/register",{firstName,email,password})
      setFirstName(res.data.firstName)
      // setLastName(res.data.lastName)
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
   
  


    <h1 className="text-2xl font-bold text-center text-black mt-6">Sign Up</h1>

      
       
    <div className="flex md:flex-row flex-col justify-center mx-auto md:space-x-12 items-center mt-6 md:mt-0">
         <img src={benzinterior} alt="" className="w-[500px] h-[350px] object-cover items-center" />

       
         <div className='flex flex-col mt-8 space-y-2 items-center '>
         <label class="block md:mr-[260px] mr-[170px]">Full Name</label>
            <input onChange={(e)=>setFirstName(e.target.value)} type="text"  class="bg-[#FAEFE9] border border-gray-300 text-gray-900 text-sm rounded-lg block w-64 md:w-[350px] p-2.5" placeholder="e.g johndoe@gmail.com" required />

            <label class="block md:mr-[300px] mr-[210px]">Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} type="text" class="bg-[#FAEFE9] border border-gray-300 text-gray-900 text-sm rounded-lg block w-64 md:w-[350px] p-2.5" placeholder="e.g johndoe@gmail.com" required />
        
            <label  class="block md:mr-[270px] mr-[180px]">Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} type="password" class="bg-[#FAEFE9] border border-gray-300 text-gray-900 text-sm rounded-lg block w-64 md:w-[350px] p-2.5" placeholder="******" required />
        
            <label  class="block mr-[120px] md:mr-[215px]">Confirm Password</label>
            <input type="password" class="bg-[#FAEFE9] border border-gray-300 text-gray-900 text-sm rounded-lg block w-64 md:w-[350px] p-2.5" placeholder="******" required />
        
          {/* <label >Enter Email</label>
         <input onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-2  border border-gray-300 rounded-lg mt-2" type="text" placeholder="Enter your email" /> */}

         {/* <label className="mt-4">Enter Password</label>
         <input onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-2  border border-gray-300 rounded-lg mt-4" type="password" placeholder="Enter your password" /> */}
         <button onClick={handleRegister} className="w-full px-4 py-4 text-lg font-bold text-white bg-gray-500 rounded-lg hover:bg-black hover:text-white mt-9">Sign Up</button>
         {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>}
         <div className="flex justify-center items-center space-x-3 mt-6">
          <p className="text-green-800">New here?</p>
          <p className="text-gray-500 hover:text-black"><Link to="/login">Sign in</Link></p>
         </div>
        </div>

    

    </div>
    <div className='mb-32'></div>
    <Footer/>
    </div>
    
  )
}

export default Register