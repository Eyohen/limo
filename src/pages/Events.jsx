import React, { useState, useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { URL, IF } from '../url'
import { SlPencil } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { SlTrash } from "react-icons/sl";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Aboutus from '../assets/GenevaExhibition.jpg'


const data = [
   {
  id : 1
},
{
  id : 2
},
{
  id : 3
},
{
  id : 4
},
// {
//   id : 5
// },
// {
//   id : 6
// }

]

const EventTile = ({item}) => {
  return (
    <div className=' w-[480px] flex flex-col items-center'>
    <img src={Aboutus} alt='' className='w-[480px] h-[230px] object-cover'/>
    <p className='font-bold text-xl'>Geneva Motor Show</p>
    <p className=' text-lg'>planning to attend the geneva motor <br /> show, coming up between 26 <br /> february to 3rd March 2023? Talk to <br /> us lets help you arrange the logistics </p>
    <button className='border-2 bg-white px-2 py-1 mt-2'>Book Now</button>
  </div>

  )
}



const Events = () => {
  const navigate=useNavigate()
    const [showConfirmation, setShowConfirmation] = useState("")
    const [items, setItems] = useState([])

    const fetchApartments = async () => {

    //   const accessToken = localStorage.getItem("access_token");

    //   if(!accessToken){
    //         // Handle the case where the access token is not available
    //     console.error('Access token not fund')
    //   }


        const res = await axios.get(URL+"/api/events"
        //,{
        //   headers: {
        //     Authorization: `Bearer ${accessToken}`,
        //   },
        // }
        )
        setItems(res.data)
        console.log(res.data)
    }


    useEffect(() => {
      fetchApartments()
    }, [])


    const handleSearch = () => {

    }

    const handleDelete=async(itemId)=>{
      try{
        const accessToken = localStorage.getItem("access_token");

        if(!accessToken){
              // Handle the case where the access token is not available
          console.error('Access token not found')
        }
  
  
        const res = await axios.delete(URL+"/api/reserves/"+itemId,{
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        setItems((prevData) => prevData.filter(item => item._id !== itemId));
        console.log(res.data)
      }
      catch(err){
        console.log(err)
      }
    }



  return (
  
    <div className='w-full bg-[#FAEFE9]'>
       <Navbar/>

       <div className='py-16 px-[260px]'>
        <button className='text-3xl font-bold border-2 border-purple-400 py-1 text-black px-4 shadow-lg mt-2'>Events in Geneva</button>
        </div>

      <div className='grid grid-cols-2 items-center justify-center px-64 mb-32 gap-y-9'>
      {data.map((item, id) => 
        //  <div key={id} class="h-screen grid grid-cols-2 gap-4 content-start items-center px-64 mb-32">
        <div key={id} class="">
             <EventTile item={item} />
             </div>
)}
</div>
      

       
  {/* <div className=' w-[480px] flex flex-col items-center'>
    <img src={Aboutus} alt='' className='w-[480px] h-[230px] object-cover'/>
    <p className='font-bold text-xl'>Geneva Motor Show</p>
    <p className=' text-lg'>planning to attend the geneva motor <br /> show, coming up between 26 <br /> february to 3rd March 2023? Talk to <br /> us lets help you arrange the logistics </p>
    <button className='border-2 bg-white px-2 py-1 mt-2'>Book Now</button>
  </div>

  <div className=' w-[480px] flex flex-col items-center'>
    <img src={Aboutus} alt='' className='w-[480px] h-[230px] object-cover'/>
    <p className='font-bold text-xl'>Geneva Motor Show</p>
    <p className=' text-lg'>planning to attend the geneva motor <br /> show, coming up between 26 <br /> february to 3rd March 2023? Talk to <br /> us lets help you arrange the logistics </p>
    <button className='border-2 bg-white px-2 py-1 mt-2'>Book Now</button>
  </div>

  <div className=' w-[480px] flex flex-col items-center'>
    <img src={Aboutus} alt='' className='w-[480px] h-[230px] object-cover'/>
    <p className='font-bold text-xl'>Geneva Motor Show</p>
    <p className=' text-lg'>planning to attend the geneva motor <br /> show, coming up between 26 <br /> february to 3rd March 2023? Talk to <br /> us lets help you arrange the logistics </p>
    <button className='border-2 bg-white px-2 py-1 mt-2'>Book Now</button>
  </div>

  <div className=' w-[480px] flex flex-col items-center'>
    <img src={Aboutus} alt='' className='w-[480px] h-[230px] object-cover'/>
    <p className='font-bold text-xl'>Geneva Motor Show</p>
    <p className=' text-lg'>planning to attend the geneva motor <br /> show, coming up between 26 <br /> february to 3rd March 2023? Talk to <br /> us lets help you arrange the logistics </p>
    <button className='border-2 bg-white px-2 py-1 mt-2'>Book Now</button>
  </div> */}

  

 


        {/* <div onClick={() => navigate(-1)} className="flex items-center space-x-3 pt-6 px-12">
        <SlArrowLeft />
        <h1 className='font-bold md:text-2xl text-xl '>Back</h1>
        </div>

      

        <div className='max-w-[1100px] bg-white mx-auto '>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-16">
      
      <h1 className="font-bold text-xl mt-10 text-center">
        Events
      </h1>

      <div className={"overflow-y-scroll"}>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr >
          <th scope="col" class="px-6 py-3 font-light ">
              id
            </th>
            <th scope="col" class="px-6 py-3 font-light">
              Exhibition
            </th>
            <th scope="col" class="px-6 py-3 font-light">
              City
            </th>
            <th scope="col" class="px-6 py-3 font-light">
              Centre
            </th>
       
            <th scope="col" class="px-6 py-3 font-light">
              date
            </th>
            <th scope="col" class="px-6 py-3 font-light">
              time
            </th>
           
          
          </tr>
        </thead>
        <tbody>
      
            {items.map((item) => (
              <tr
                class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-200"
                key={item._id}
                //  onClick={()=>navigate(`/reservedetail/${item._id}`)}
              >
                 <td class="px-6 py-2">{item._id.slice(0,6)}</td>
            
                <td class="px-6 py-2">{item.exhibitionName}</td>
                <td class="px-6 py-2">{item.city}</td>
                <td class="px-6 py-2">{item.centre}</td>
            
                <td class="px-6 py-2">{new Date(item.date)?.toDateString()}</td>
                <td class="px-6 py-2">{item.time}</td>
               
              </tr>
            ))}
        </tbody>
      </table>
      </div>
    </div>
        </div>
        */}
      
       
        
      <Footer/>
    </div>


  )
}

export default Events