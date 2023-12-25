import React from 'react'
import Tours from '../assets/Tours.jpg'
import AirportTransfers from '../assets/AirportTransfers.jpg'
import EventProtocols from '../assets/EventProtocols.jpg'

const ThirdLayer = () => {
  return (
    <div className='bg-white'>
    <div className='justify-center'>
    <div className='flex justify-evenly items-center py-16 md:flex-row flex-col gap-y-6 mb-12 mt-16'>
     <div className='flex flex-col items-center'>
    <img src={AirportTransfers} alt='' className='w-[300px] h-[220px] items-center'/>
    <p className='font-bold text-xl text-center mt-2'>Airport Transfers</p>
    <p>Whether you're arriving or  departing,<br /> a private airport transfer is the  perfect <br /> way to start or end your journey in style. </p>
    </div>   

    <div className='flex flex-col items-center'>
    <img src={Tours} alt='' className='w-[300px] h-[220px] items-center'/>
    <p className='font-bold text-xl text-center mt-2'>Tours</p>
    <p>Whether you're arriving or  departing,<br /> a private airport transfer is the  perfect <br /> way to start or end your journey in style. </p>
    </div>   


    <div className='flex flex-col items-center justify-center'>
    <img src={EventProtocols} alt='' className='w-[300px] h-[220px] items-center'/>
    <p className='font-bold text-xl text-center mt-2'>Event Protocols</p>
    <p>Whether you're arriving or  departing,<br /> a private airport transfer is the  perfect <br /> way to start or end your journey in style. </p>
    </div>   
    </div>
    </div>
</div>
  )
}

export default ThirdLayer