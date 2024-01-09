import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import axios from "axios"
import { URL } from '../url';
import Navbar from "../components/Navbar"
import benzinterior from '../assets/benzinterior.jpg'
import Footer from "../components/Footer"

import "react-datepicker/dist/react-datepicker.css";

const ContactUs = () => {
    // const [startDate, setStartDate] = useState(new Date());
    const [pickUp, setPickUp] = useState("")
    const [arrival, setArrival] = useState("")
    const [time, setTime] = useState("")
    // const [date, setDate] = useState("")
    const [vehicle, setVehicle] = useState("")
    const [passengers, setPassengers] = useState("")
    const [airport, setAirport] = useState("")
    const [flightNum, setFlightNum] = useState("")
    const [good, setGood] = useState(false)



    const CreateReservation = async(e) => {
      e.preventDefault()
      const reservation = {
        pickUp,
        arrival,
        time,
        // date,
        vehicle,
        passengers,
        airport,
        flightNum
      }
  
        try {

          const accessToken = localStorage.getItem("access_token")


          if(!accessToken){
            // Handle the case where the access token is not available
        console.error('Access token not found')
      }

          const res =  await axios.post(URL+"/api/reserves/create", reservation, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            }
          })
          setGood(true)
          console.log(res.data)
          console.log(reservation)
          setPickUp("")
          setAirport("")
          setArrival("")
          setFlightNum("")
          setTime("")
          setVehicle("")
          setPassengers("")
        }
        catch(err){
          console.log(err)
        }
    
    } 
    
  return (
    <div className="bg-[#FAEFE9]">
          <Navbar/>
       
        <h1 className="text-2xl font-bold text-center text-black mt-9">Contact Us</h1>

      
<div className="flex md:flex-row flex-col md:space-x-12 mx-auto justify-center items-center">

  

<div className='flex flex-col space-y-8'>

<p className='text-3xl font-bold'>Let's get in touch, we'd love to hear from you</p>
<p className='text-orange-600 text-lg'>Phone : <span className='text-black'>+41794186276</span></p>
<p className='text-orange-600 text-lg'>Whatsapp : <span className='text-black'>+41794186276</span></p>
<p className='text-orange-600 text-lg'>Email : <span className='text-black'>info@limotransportpro.com</span></p>


</div>

{/* 
         <div className=""> */}
        <form>
        <div className='flex flex-col mt-32 space-y-8 items-center '>

        <input onChange={(e)=>setPickUp(e.target.value)} class="bg-[#FAEFE9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 md:w-[350px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 items-center" placeholder='Full Name'/>
        <input onChange={(e)=>setArrival(e.target.value)} class="bg-[#FAEFE9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Email'/>
        <textarea onChange={(e)=>setTime(e.target.value)} class="bg-[#FAEFE9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='tell us a little about the problem'/>
      
        <button onClick={CreateReservation} className='bg-black text-white px-12 py-2 mt-8 rounded-md mb-8'>Send Message</button>
        {good && <h3 className="text-green-500 text-lg ">Request Created Successfully</h3>}
</div>
</form>

{/* 
</div> */}
</div>

<div className='mb-16'>




     
       
  

</div>
<Footer/>
    </div>
  )
}

export default ContactUs



