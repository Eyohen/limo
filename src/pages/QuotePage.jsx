import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import axios from "axios"
import { URL } from '../url';

import "react-datepicker/dist/react-datepicker.css";

const QuotePage = () => {
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
    <div>
        <p className='text-center font-bold text-xl mt-6'>Make a Booking</p>

        <form>
        <div className='items-center justify-center flex flex-col mt-32 space-y-8'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvJOs1sokvlIva3YiCCDBNiSZS-wV2ThkCse8csaVyjA&s' className='w-[280px] h-[250px]'/>
        <input onChange={(e)=>setPickUp(e.target.value)} className='border w-[270px] md:w-[550px] px-3 text-black' placeholder='Enter pick up Location'/>
        <input onChange={(e)=>setArrival(e.target.value)} className='border w-[270px] md:w-[550px] px-3' placeholder='Enter Arrival Location'/>
        <input onChange={(e)=>setTime(e.target.value)} className='border w-[270px] md:w-[550px] px-3' placeholder='Enter Time'/>
        {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='border mr-[90px] md:mr-[370px]' /> */}
        <input onChange={(e)=>setVehicle(e.target.value)} className='border w-[270px] md:w-[550px] px-3' placeholder='Enter Type of Vehicle'/>
        <input onChange={(e)=>setPassengers(e.target.value)} className='border w-[270px] md:w-[550px] px-3' placeholder='Enter Number of passengers'/>
        <input onChange={(e)=>setAirport(e.target.value)} className='border w-[270px] md:w-[550px] px-3' placeholder='Enter Airport Name (optional)'/>
        <input onChange={(e)=>setFlightNum(e.target.value)} className='border w-[270px] md:w-[550px] px-3' placeholder='Enter flight number (optional)'/>
        <button onClick={CreateReservation} className='bg-black text-white px-12 py-2 mt-8 rounded-md mb-8'>Submit</button>
        {good && <h3 className="text-green-500 text-lg ">Request Created Successfully</h3>}
</div>
</form>

<div className='mb-64'>

</div>


     
       
  


    </div>
  )
}

export default QuotePage