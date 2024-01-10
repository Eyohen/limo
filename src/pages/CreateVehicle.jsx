import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import axios from "axios"
import { URL } from '../url';
import { SlArrowLeft } from "react-icons/sl";
import { Link, useNavigate} from 'react-router-dom'
import Blacklogo from "../assets/logoremove.png";

import "react-datepicker/dist/react-datepicker.css";

const CreateVehicle = () => {
  const navigate=useNavigate()
   
    const [vehicleName, setVehicleName] = useState("")
  
    const [good, setGood] = useState(false)
    const [show, setShow] = useState(false)



    const handleEvent = async(e) => {
      e.preventDefault()
      const event = {
        vehicleName,
      
      }
    

        try {

          const accessToken = localStorage.getItem("access_token")


          if(!accessToken){
            // Handle the case where the access token is not available
        console.error('Access token not found')
      }

          const res =  await axios.post(URL+"/api/vehicles/create", event, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            }
          })
          setVehicleName("")
  
          setGood(true)
          setShow(true)
          setTimeout(() => {
            setShow(false)
          },2000 );
          console.log(res.data)
         
      
        }
        catch(err){
          console.log(err)
        }
    
    } 
    
  return (
    <div className='bg-[#FAEFE9] h-screen'>
      <div className='p-6'>
          <Link to={"/"}>
          <img src={Blacklogo} alt="" className=" w-18 h-10 object-cover" />
        </Link>
        </div>

      
  
  

        <p className='text-center font-bold text-xl mt-6'>Create an Event</p>

     
        <form>
        <div className='items-center justify-center flex flex-col mt-16 space-y-8'>

        {/* <input onChange={(e)=>setFile(e.target.files[0])}  className="border w-[270px] md:w-[550px] px-3 py-2"  type="file" multiple  /> */}
        <input value={vehicleName} onChange={(e)=>setVehicleName(e.target.value)}  className='border w-[270px] md:w-[550px] px-3 py-2  bg-[#FAEFE9]  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'  placeholder='Enter Vehicle Name'/>
        {/* <textarea value={description} onChange={(e)=>setDescription(e.target.value)} className='border w-[270px] md:w-[550px] px-3 py-2'  placeholder='Enter event description' /> */}
      
        <button onClick={handleEvent} className='bg-black text-white px-12 py-3 mt-8 rounded-md mb-8'>Submit</button>
        {(good && show) && <h3 className="text-green-500 text-lg ">Event Created Successfully</h3>}
</div>
</form>

<div className='flex items-center justify-center mt-9 space-x-12'>


<div onClick={() => navigate(-1)} className="flex items-center space-x-3 px-12">
        <SlArrowLeft color='gray' />
        <h1 className='text-md text-gray-400 font-md '>go back</h1>
        </div> 


        <Link to={'/adminevent'}><p className='text-sm text-gray-400 font-md '>See Created Events</p></Link>

        </div>

<div className='mb-64'>

</div>


     
       
  


    </div>
  )
}

export default CreateVehicle