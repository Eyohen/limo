import React, {useState, useEffect} from 'react'
import DatePicker from "react-datepicker";
import axios from "axios"
import { URL } from '../url';
import Navbar from "../components/Navbar"
import benzinterior from '../assets/benzinterior.jpg'
import Footer from "../components/Footer"

import "react-datepicker/dist/react-datepicker.css";

const QuotePage = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [pickUp, setPickUp] = useState("")
    const [arrival, setArrival] = useState("")
    const [time, setTime] = useState("")
    const [phone, setPhone] = useState("")
    const [date, setDate] = useState(new Date())
    const [vehicle, setVehicle] = useState([])
    const [passengers, setPassengers] = useState("")
    const [airport, setAirport] = useState("")
    const [flightNum, setFlightNum] = useState("")
    const [desc, setDesc] = useState("")
    const [selectedVehicle, setSelectedVehicle] = useState([])
    const [good, setGood] = useState(false)
    const [isButtonDisabled, setButtonDisabled] = useState(false);


    const handleSelect = (event) => {
      setSelectedVehicle(event.target.value)
    }
  
    
  
  
    //getting user details
    const fetchVehicle = async ()=>{
      try{
        //  const res=await axios.get(URL+"/api/users/"+user._id)
        const res = await axios.get(URL+"/api/vehicles/")
         setVehicle(res.data)
       
         console.log(res.data)
       
        
      }
      catch(err){
         console.log(err)
      }
    }
  
  
    useEffect(()=>{
      fetchVehicle()
    },[])
    


    const disableButton = () => {
      setButtonDisabled(true);
      alert("Button has been disabled!");
  };

  const enableButton = () => {
      setButtonDisabled(false);
      alert("Button has been enabled!");
  };



    const CreateReservation = async(e) => {
      e.preventDefault()
      const reservation = {
        pickUp,
        arrival,
        time,
        phone,
        date : startDate,
        vehicle:selectedVehicle,
        passengers,
        airport,
        flightNum,
        desc
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
          setButtonDisabled(true);
          setGood(true)
          console.log(res.data)
          console.log(reservation)
          // setPickUp("")
          // setPhone("")
          // setDate("")
          // setAirport("")
          // setArrival("")
          // setFlightNum("")
          // setTime("")
          // setVehicle("")
          // setPassengers("")
        }
        catch(err){
          console.log(err)
        } finally{
          setPickUp("")
          setPhone("")
          setDate("")
          setAirport("")
          setArrival("")
          setFlightNum("")
          setTime("")
          setVehicle("")
          setPassengers("")
        }
    
    } 
    
  return (
    <div className="bg-[#FAEFE9]">
          <Navbar/>
       
        <h1 className="text-2xl font-bold text-center text-black mt-9">Make a Reservation</h1>

      
<div className="flex md:flex-row flex-col md:space-x-12 mx-auto justify-center items-center">
         <img src={benzinterior} alt="" className="w-[500px] h-[350px] object-cover items-center" />

{/* 
         <div className=""> */}
        <form>
        <div className='flex flex-col mt-32 space-y-8 items-center'>

        <input onChange={(e)=>setPickUp(e.target.value)} class="bg-[#FAEFE9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 items-center" placeholder='Enter pick up Location'/>
        <input onChange={(e)=>setArrival(e.target.value)} class="bg-[#FAEFE9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter Arrival Location'/>
        <input onChange={(e)=>setPhone(e.target.value)} class="bg-[#FAEFE9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter Phone Number'/>
        <input onChange={(e)=>setTime(e.target.value)} class="bg-[#FAEFE9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter Time e.g 3:00pm'/>
        <p className='text-sm text-gray-400'>Enter Date: <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='bg-[#FAEFE9] border border-gray-300 text-sm text-gray-400 rounded-lg mr-[10px] md:mr-[300px] py-2 w-32 md:w-[350px]' placeholder='Enter Date' /></p>
        {/* <input onChange={(e)=>setVehicle(e.target.value)} class="bg-[#FAEFE9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter Type of Vehicle'/> */}
        <select value={selectedVehicle} onChange={handleSelect} class="bg-[#FAEFE9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
            <option value="">Select Vehicle:</option>
            {vehicle.map(item => (
              <option key={item._id} value={item._id}>{item.vehicleName}</option>
            ) )}
          </select>
        <input onChange={(e)=>setPassengers(e.target.value)} class="bg-[#FAEFE9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter Number of passengers'/>
        <input onChange={(e)=>setAirport(e.target.value)} class="bg-[#FAEFE9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter Airport Name (optional)'/>
        <input onChange={(e)=>setFlightNum(e.target.value)} class="bg-[#FAEFE9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter flight number (optional)'/>
        <textarea onChange={(e)=>setDesc(e.target.value)} class="bg-[#FAEFE9] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Make a special request (optional)'/>
        <button onClick={CreateReservation} className='bg-black text-white px-12 py-2 mt-8 rounded-md mb-8'>Submit</button>
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

export default QuotePage



