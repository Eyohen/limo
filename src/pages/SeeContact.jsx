import React, {useEffect, useState} from 'react'
import DatePicker from "react-datepicker";
import axios from "axios"
import { URL } from '../url';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Blacklogo from "../assets/logoremove.png";
import { SlArrowLeft } from "react-icons/sl";


import "react-datepicker/dist/react-datepicker.css";

const SeeContact = () => {
    const {id: contactId} = useParams()
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

        
          const res =  await axios.get(URL+"/api/contacts/"+contactId)
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
     },[contactId])
  return (
  
    <div className='bg-[#FAEFE9] h-screen'>
      <div className='p-6'>
          <Link to={"/"}>
          <img src={Blacklogo} alt="" className=" w-18 h-10 object-cover" />
        </Link>
        </div>
        <p className='text-center font-bold text-xl mt-6'>Contact Detail</p>
    

            <div className='flex flex-col mx-auto items-center justify-center mt-16 space-y-4'>
            <p className='bg-[#FAEFE9] font-bold rounded-lg border border-gray-300 px-6 py-2'>Name: {reserves?.name}</p>
           <p className='bg-[#FAEFE9] font-bold rounded-lg border border-gray-300 px-6 py-2'>Email: {reserves?.email}</p>
            <p className='bg-[#FAEFE9] font-bold rounded-lg border border-gray-300 px-6 py-2'>Phone Number: {reserves?.phone}</p>
           <p className='bg-[#FAEFE9] font-bold rounded-lg border border-gray-300 px-6 py-2'>Description: {reserves?.description}</p>



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

export default SeeContact


