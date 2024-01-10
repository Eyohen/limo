import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import axios from "axios"
import { URL } from '../url';
import { SlArrowLeft } from "react-icons/sl";
import { Link, useNavigate} from 'react-router-dom'
import Blacklogo from "../assets/logoremove.png";

import "react-datepicker/dist/react-datepicker.css";

const CreateEvent = () => {
  const navigate=useNavigate()
    const [startDate, setStartDate] = useState(new Date());
    const [exhibitionName, setExhibitionName] = useState("")
    const [description, setDescription] = useState("")
    const [city, setCity] = useState("")
    const [time, setTime] = useState("")
    const [file,setFile]=useState(null)
    const [date, setDate] = useState(new Date())
    const [centre, setCentre] = useState("")
    const [good, setGood] = useState(false)
    const [show, setShow] = useState(false)



    const handleEvent = async(e) => {
      e.preventDefault()
      const event = {
        exhibitionName,
        description,
        city,
        time,
        date : startDate,
        centre,
      }
      if(file){
        const data=new FormData()
        const filename=Date.now()+file.name
        data.append("img",filename)
        data.append("file",file)
        event.photo=filename
        console.log(data)
        //img upload
        try{
          const accessToken = localStorage.getItem("access_token");

          if(!accessToken){
                // Handle the case where the access token is not available
            console.error('Access token not found')
          }

          const imgUpload = await axios.post(URL+"/api/upload",data, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            }
          })
          // console.log(imgUpload.data)
        }
        catch(err){
          console.log(err)
        }
      }


        try {

          const accessToken = localStorage.getItem("access_token")


          if(!accessToken){
            // Handle the case where the access token is not available
        console.error('Access token not found')
      }

          const res =  await axios.post(URL+"/api/events/create", event, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            }
          })
          setExhibitionName("")
          setTime("")
          setCentre("")
          setDate("")
          setCity("")
          setDescription("")
          setStartDate("")
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

        <input onChange={(e)=>setFile(e.target.files[0])}  className="border w-[270px] md:w-[550px] px-3 py-2"  type="file" multiple  />
        <input value={exhibitionName} onChange={(e)=>setExhibitionName(e.target.value)} className='border w-[270px] md:w-[550px] px-3 py-2  bg-[#FAEFE9]  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'  placeholder='Enter event Name'/>
        <textarea value={description} onChange={(e)=>setDescription(e.target.value)} className='border border-gray-300 w-[270px] md:w-[550px] px-3 py-2 bg-[#FAEFE9]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:'  placeholder='Enter event description' />
        {/* <input value={city} onChange={(e)=>setCity(e.target.value)} className='border w-[270px] md:w-[550px] px-3 py-2' placeholder='Enter City'/>
        <input value={centre} onChange={(e)=>setCentre(e.target.value)} className='border w-[270px] md:w-[550px] px-3 py-2' placeholder='Enter Centre'/>
        <p>Enter Date:<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='border mr-[10px] md:mr-[300px] py-2' placeholder='Enter Date' /></p>
        <input onChange={(e)=>setTime(e.target.value)} value={time} className='border w-[270px] md:w-[550px] px-3 py-2' placeholder='Enter Time e.g 2:00PM'/> */}
       
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

export default CreateEvent