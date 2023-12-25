import React from 'react'
import Navbar from '../components/Navbar'

const Services = () => {
  return (
    <div>
         <Navbar/>
         <div className='flex items-center justify-center space-x-12 mt-16'>
            <div className='text-center '>
            <p className='font-bold text-4xl'>Your best ride</p>
            <p className='font-bold text-4xl'>around Geneva</p>
            <p className='mt-6'>At Limo Geneva Sarl, we help business executives and leisure <br/> travellers put it all together. 
                We take you from your doorsteps to <br /> the airport, to event destinations, to local tour sites, 
                choice <br /> hotels, niche markets and everywhere you want to go around <br/> Geneva. With us, you know
                 you will get the best ride in town.</p>
                 </div>
            <img src='https://5.imimg.com/data5/WZ/JV/DF/SELLER-746073/6-500x500.png' className='w-[350px] h-[380px] object-cover'/>
         </div>
    </div>
  )
}

export default Services