import { Link, useNavigate } from "react-router-dom"
// import Footer from "../components/Footer"
import { useContext, useState } from "react"
import axios from "axios"
import { URL } from "../url"
import benzinterior from '../assets/benzinterior.jpg'
// import { UserContext } from "../context/UserContext"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)
//   const {setUser}=useContext(UserContext)
  const [isLoading, setIsLoading] = useState(false);
  const navigate=useNavigate()

  const handleLogin=async()=>{
    setIsLoading(true); 
    try{
      // const res = await axios.post(URL+"/api/auth/login",{email,password},{withCredentials:true})
      const res = await axios.post(URL+"/api/auth/login",{email,password})

      const { access_token } = res.data;
 
      if(res.status == 200){
        localStorage.setItem("access_token", access_token)   
        // setUser(res.data)
        navigate("/")
      }
    }
    catch(err){
      setError(true)
      console.log(err)
    } finally {
      setIsLoading(false); // Set loading back to false
    }

  }
  return (
    <div className="bg-[#FAEFE9]">
   <Navbar/>


    <h1 className="text-2xl font-bold text-center text-black mt-6">Sign In</h1>

      
    <div className="flex md:flex-row flex-col justify-center mx-auto md:space-x-12 items-center mt-6">
         <img src={benzinterior} alt="" className="w-[500px] h-[300px] object-cover items-center" />


        <form>
         <div className="flex flex-col mt-8 space-y-2 items-center ">
            <label for="first_name" class="block md:mr-[300px] mr-[210px]">Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} type="text" id="first_name" class="bg-[#FAEFE9] border border-gray-300 text-gray-900 text-sm rounded-lg block w-64 md:w-[350px] p-2.5" placeholder="e.g johndoe@gmail.com" required />
        
            <label for="password" class="block md:mr-[270px] mr-[180px]">Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} type="text" id="first_name" class="bg-[#FAEFE9] border border-gray-300 text-gray-900 text-sm rounded-lg block w-64 md:w-[350px] p-2.5 " placeholder="******" required />
        

          {/* <label >Enter Email</label>
         <input onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-2  border border-gray-300 rounded-lg mt-2" type="text" placeholder="Enter your email" /> */}

         {/* <label className="mt-4">Enter Password</label>
         <input onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-2  border border-gray-300 rounded-lg mt-4" type="password" placeholder="Enter your password" /> */}
         <button onClick={handleLogin} className="w-full px-4 py-4 text-lg font-bold text-white bg-gray-500 rounded-lg hover:bg-black hover:text-white mt-9">Log in</button>
         {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>}
         <div className="flex justify-center items-center space-x-3 mt-6">
          <p className="text-green-800">New here?</p>
          <p className="text-gray-500 hover:text-black"><Link to="/register">Sign Up</Link></p>
         </div>
        </div>

        </form>
     



    </div>
    <div className='mb-32'></div>
    <Footer/>
    </div>
    
  )
}

export default Login