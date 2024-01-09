import React, {useEffect, useState} from 'react'
import DatePicker from "react-datepicker";
import axios from "axios"
import { URL } from '../url';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Blacklogo from "../assets/logoremove.png";
import { SlArrowLeft } from "react-icons/sl";


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
    const navigate=useNavigate()



    const getReservation = async () => {
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
  
    <div className='bg-[#FAEFE9] h-screen'>
      <div className='p-6'>
          <Link to={"/"}>
          <img src={Blacklogo} alt="" className=" w-18 h-10 object-cover" />
        </Link>
        </div>
        <p className='text-center font-bold text-xl mt-6'>Reservation Details</p>
        <p className='text-center font-bold text-xl mt-6'> Name: {reserves?.user?.firstName}</p>
        <p className='text-center font-bold text-xl mt-6'> Email: {reserves?.user?.email}</p>

            <div className='flex flex-col mx-auto items-center justify-center mt-16 space-y-4'>
            <p className='bg-[#FAEFE9] font-bold rounded-lg border border-gray-300 px-6 py-2'>Pick Up Location: {reserves.pickUp}</p>
            <p className='bg-[#FAEFE9] font-bold rounded-lg border border-gray-300 px-6 py-2'>Arrival Location: {reserves.arrival}</p>
            <p className='bg-[#FAEFE9] font-bold rounded-lg border border-gray-300 px-6 py-2'>Phone Number: {reserves.phone}</p>
            <p className='bg-[#FAEFE9] font-bold rounded-lg border border-gray-300 px-6 py-2'>Time: {reserves.time}</p>
            <p className='bg-[#FAEFE9] font-bold rounded-lg border border-gray-300 px-6 py-2'>Date: {reserves.date}</p>
            <p className='bg-[#FAEFE9] font-bold rounded-lg border border-gray-300 px-6 py-2'>Vehicle: {reserves.vehicle}</p>
            <p className='bg-[#FAEFE9] font-bold rounded-lg border border-gray-300 px-6 py-2'>passengers: {reserves.passengers}</p>
            <p className='bg-[#FAEFE9] font-bold rounded-lg border border-gray-300 px-6 py-2'>Airport: {reserves.airport ? (reserves.airport) : ('Not Available')}</p>
            <p className='bg-[#FAEFE9] font-bold rounded-lg border border-gray-300 px-6 py-2'>Flight Number: {reserves.flightNum ? (reserves.airport) : ('Not Available')}</p>


      <div>
            <div onClick={() => navigate(-1)} className="flex items-center space-x-3 px-12 mt-9">
        <SlArrowLeft color='gray' />
        <h1 className='text-md text-gray-400 font-md '>go back</h1>
        </div> 
        </div>


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