import React from 'react'
import Nudelogo from '../assets/LogoWhiteRemove.png'
import { Link } from 'react-router-dom'

const AdminNav = () => {
  return (
    <div className='bg-white px-4 py-1'>
<div className='flex justify-between items-center'>


   <div className="bg-black rounded-lg">
   <Link to={'/'}><img src={Nudelogo} alt="" className="w-24 h-18 object-cover" /></Link>
   </div>

<div>
   <Link to={"/createevent"}>
          <p className="text-2xl font-bold ml-2 md:ml-0">Create Event</p>
        </Link>
        </div>

        <div>
        <Link to={"/createvehicle"}>
          <p className="text-2xl font-bold">Create Vehicle</p>
        </Link>
        </div>

        <div>
        <Link to={"/admincontact"}>
          <p className="text-2xl font-bold ">Check Contact</p>
        </Link>
        </div>

        </div>
    </div>
  )
}

export default AdminNav