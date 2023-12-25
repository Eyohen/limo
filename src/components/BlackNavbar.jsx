import React,{ useContext, useEffect, useState } from "react"
import { Link } from 'react-router-dom'
// import { UserContext } from "../context/UserContext"
import axios from "axios"
// import { IF, URL } from "../url"
import Blacklogo from '../assets/BlackLogo.png'
import { HiBars3 } from "react-icons/hi2";


const BlackNavbar = () => {
    const [modal, setModal] = useState(false)

 
    const toggleModal = () => {
        setModal(!modal)
    }
 

  return (
    <div className='h-20 items-center bg-[#040308]'>
    <div className='flex justify-between p-2 px-6 items-center'>
   {/* <Link to={'/'}> <p className='text-gray-400 font-bold text-3xl'>Limo Geneva Sarl</p></Link> */}
   <Link to={'/'}><img src={Blacklogo} alt="" className="w-24 h-18 object-cover" /></Link>

   <Link to={'/'}> <p className='hidden md:block text-lg text-white'>French</p></Link>
   <Link to={'/'}> <p className='hidden md:block bg-gray-400  text-white text-lg px-10 py-2'>English</p></Link>

  
    <Link to="/about"><p className='hidden md:block text-black text-lg font-medium hover:bg-white hover:rounded-full hover:border-2 hover:border-black hover:px-1.5 ' >About us</p></Link>
    {/* <Link to={user?'/findapartment':"/clientlogin" }><p className='text-green-700 text-lg font-medium hover:bg-green-800 hover:text-white hover:rounded-full hover:px-1.5'>Find your Apartment</p></Link> */}
    <Link to={'/services'}><p className='hidden md:block text-white text-lg font-medium border border-orange-500 px-3 py-2 hover:bg-white hover:text-black hover:border-black'>Reservation</p></Link>
    {/* <Link to="/events"><p className='hidden md:block text-black text-lg font-medium hover:bg-white hover:rounded-full hover:border-2 hover:border-black hover:px-1.5 '>Events</p></Link> */}
    {/* <Link to="/communities"><p className='hidden md:block text-black text-lg font-medium hover:bg-white hover:rounded-full hover:border-2 hover:border-black hover:px-1.5 '>Testimonials</p></Link> */}
    <Link to={'/login'}><p className='hidden md:block text-white text-lg font-medium hover:bg-white hover:border-2 hover:text-black hover:px-2'>Login</p></Link>
    <Link to={'/'}><HiBars3 onClick={toggleModal} color="white" size={30}/></Link>
    {/* <Link to="/communities"><p className='hidden md:block text-black text-lg font-medium hover:bg-white hover:rounded-full hover:border-2 hover:border-black hover:px-1.5 '>Reservations</p></Link> */}

   
    {modal && (
        <div className="bg-white h-screen absolute ml-[1310px] w-[350px] mt-[800px]">
            <p>Hello</p>
          {/* <div onClick={toggleModal} className=""></div>
          <div className="modal-content rounded-xl">
            <p className='text-center text-2xl text-green-700'>Apartment A</p>
       
            <div className='flex space-x-4 items-center justify-center mt-3'>
            <button className='bg-green-700 rounded-full px-2'><HiMinusSmall /></button>
            <p>
           9
            </p>
            <button  className='bg-green-700 rounded-full px-2'><HiPlusSmall /></button>
            </div>
            {/* <div className='items-center justify-center '> */}
            {/* <button className='bg-green-700 px-2 rounded-full mx-32 mt-6' onClick={toggleModal}>Submit</button> */}
            {/* </div> */}
            {/* <button className="close-modal text-white" onClick={toggleModal} >
              <p className="text-white">CLOSE</p>
            </button> */}
{/*           
          </div> 
          */}
        </div>
      )} 


    
    </div>
   
</div>

  )
}

export default BlackNavbar