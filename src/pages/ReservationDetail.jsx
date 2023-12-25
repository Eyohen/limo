import React, {useEffect, useState} from 'react'
import DatePicker from "react-datepicker";
import axios from "axios"
import { URL } from '../url';
import { useNavigate, useParams } from 'react-router-dom';

import "react-datepicker/dist/react-datepicker.css";

const ReservationDetail = () => {
    const {id: reserveId} = useParams()
    // const [startDate, setStartDate] = useState(new Date());
    const [pickUp, setPickUp] = useState("")
    const [arrival, setArrival] = useState("")
    const [time, setTime] = useState("")
    // const [date, setDate] = useState("")
    const [vehicle, setVehicle] = useState("")
    const [passengers, setPassengers] = useState("")
    const [airport, setAirport] = useState("")
    const [flightNum, setFlightNum] = useState("")
    const [reserves, setReserves] = useState([])



    const getReservation = async() => {
    //   e.preventDefault()
    //   const reservation = {
    //     pickUp,
    //     arrival,
    //     time,
    //     // date,
    //     vehicle,
    //     passengers,
    //     airport,
    //     flightNum
    //   }
  
        try {

          const accessToken = localStorage.getItem("access_token")


          if(!accessToken){
            // Handle the case where the access token is not available
        console.error('Access token not found')
      }

          const res =  await axios.get(URL+"/api/reserves/"+reserveId,  {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            }
          })
          console.log(res.data)
          setReserves(res.data)
        //   console.log(reservation)
        }
        catch(err){
          console.log(err)
        }
    
    } 
    

     useEffect(() => {
        getReservation()
     },[reserveId])
  return (
    <div>
        <p className='text-center font-bold text-xl mt-6'> Name: {reserves?.user?.firstName}</p>

            <div className='flex flex-col mx-auto items-center justify-center mt-16 space-y-4'>
            <p className='font-bold border px-6'>Pick Up Location: {reserves.pickUp}</p>
            <p className='font-bold border px-6'>Arrival Location: {reserves.arrival}</p>
            <p className='font-bold border px-6'>Time: {reserves.time}</p>
            <p className='font-bold border px-6'>Date: {reserves.date}</p>
            <p className='font-bold border px-6'>Vehicle: {reserves.vehicle}</p>
            <p className='font-bold border px-6'>passengers: {reserves.passengers}</p>
            <p className='font-bold border px-6'>Airport: {reserves.airport ? (reserves.airport) : ('Not Available')}</p>
            <p className='font-bold border px-6'>Flight Number: {reserves.flightNum ? (reserves.airport) : ('Not Available')}</p>
            </div>

      

<div className='mb-64'>

</div>


     
       
  


    </div>
  )
}

export default ReservationDetail


/**
 *   <form>
        <div className='items-center justify-center flex flex-col mt-32 space-y-8'>
          
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvJOs1sokvlIva3YiCCDBNiSZS-wV2ThkCse8csaVyjA&s' className='w-[280px] h-[250px]'/> 
        <input onChange={(e)=>setPickUp(e.target.value)} value={pickUp} className='border w-[270px] md:w-[550px] px-3 text-black' placeholder='Set pick up Location'/>
        <input onChange={(e)=>setArrival(e.target.value)} value={arrival} className='border w-[270px] md:w-[550px] px-3' placeholder='Set Arrival Location'/>
        <input onChange={(e)=>setTime(e.target.value)} value={time} className='border w-[270px] md:w-[550px] px-3' placeholder='Set Time'/>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='border mr-[90px] md:mr-[370px]' /> 
        <input onChange={(e)=>setVehicle(e.target.value)} value={vehicle} className='border w-[270px] md:w-[550px] px-3' placeholder='Set Type of Vehicle'/>
        <input onChange={(e)=>setPassengers(e.target.value)} value={passengers} className='border w-[270px] md:w-[550px] px-3' placeholder='Set Number of passengers'/>
        <input onChange={(e)=>setAirport(e.target.value)} value={airport} className='border w-[270px] md:w-[550px] px-3' placeholder='Enter Airport (optional)'/>
        <input onChange={(e)=>setFlightNum(e.target.value)} value={flightNum} className='border w-[270px] md:w-[550px] px-3' placeholder='Enter flight number (optional)'/>
       
</div>
</form>
 */