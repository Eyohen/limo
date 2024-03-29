import React, {useState, useEffect} from 'react'
import DatePicker from "react-datepicker";
import axios from "axios"
import { URL } from '../url';
import { SlArrowLeft } from "react-icons/sl";
import { Link, useNavigate, useParams} from 'react-router-dom'

import "react-datepicker/dist/react-datepicker.css";

const UpdateEvent = () => {
  const navigate=useNavigate()
    const {id: eventId} = useParams()
    const [startDate, setStartDate] = useState(new Date());
    const [exhibitionName, setExhibitionName] = useState("")
    const [city, setCity] = useState("")
    const [time, setTime] = useState("")
    const [date, setDate] = useState(new Date())
    const [centre, setCentre] = useState("")
    const [good, setGood] = useState(false)
    const [show, setShow] = useState(false)



    const fetchEvent = async () => {
        try{
          //  const res=await axios.get(URL+"/api/users/"+user._id)
          const res = await axios.get(URL+"/api/events/"+eventId)
          console.log(res.data)
         
           setExhibitionName(res.data.exhibitionName)
           setCity(res.data.city)
           setTime(res.data.time)
           setDate(res.data.date)
           setStartDate(res.data.startDate)
           setCentre(res.data.centre)
           navigate('/adminevent')
          
           
          
        }
        catch(err){
           console.log(err)
        }
      }



    const handleEvent = async(e) => {
      e.preventDefault()
      const event = {
        exhibitionName,
        city,
        time,
        date : startDate,
        centre,
       
      }
  
        try {

          const accessToken = localStorage.getItem("access_token")


          if(!accessToken){
            // Handle the case where the access token is not available
        console.error('Access token not found')
      }

          const res =  await axios.put(URL+"/api/events/",+eventId, event, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            }
          })
          setExhibitionName("")
          setTime("")
          setCentre("")
          setDate("")
          setCity("")
          setStartDate("")
          setGood(true)
          setShow(true)
          setTimeout(() => {
            setShow(false)
          },2000 );
          console.log(res.data)
          console.log(reservation)
      
        }
        catch(err){
          console.log(err)
        }
    } 



    useEffect(()=>{
        fetchEvent()
      },[eventId])
      
    
  return (
    <div>
      
  
        <div onClick={() => navigate(-1)} className="flex items-center space-x-3 pt-6 px-12">
        <SlArrowLeft />
        <h1 className='font-bold md:text-2xl text-xl '>Back</h1>
     
        </div> 


        <p className='text-center font-bold text-xl mt-6'>Update Event</p>

     

        <form>
        <div className='items-center justify-center flex flex-col mt-16 space-y-8'>

        <input value={exhibitionName} onChange={(e)=>setExhibitionName(e.target.value)} className='border w-[270px] md:w-[550px] px-3 py-2'  placeholder='Enter Exhibition Name'/>
        <input value={city} onChange={(e)=>setCity(e.target.value)} className='border w-[270px] md:w-[550px] px-3 py-2' placeholder='Enter City'/>
        <input value={centre} onChange={(e)=>setCentre(e.target.value)} className='border w-[270px] md:w-[550px] px-3 py-2' placeholder='Enter Centre'/>
        <p>Enter Date:<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='border mr-[10px] md:mr-[300px] py-2' placeholder='Enter Date' /></p>
        <input onChange={(e)=>setTime(e.target.value)} value={time} className='border w-[270px] md:w-[550px] px-3 py-2' placeholder='Enter Time e.g 2:00PM'/>
       
        <button onClick={handleEvent} className='bg-black text-white px-12 py-3 mt-8 rounded-md mb-8'>Submit</button>
        {(good && show) && <h3 className="text-green-500 text-lg ">Event Updated Successfully</h3>}
</div>
</form>

<div className='mb-64'>

</div>


     
       
  


    </div>
  )
}

export default UpdateEvent