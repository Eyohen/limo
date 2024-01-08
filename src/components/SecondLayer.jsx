import React from 'react'
import SecondCar from '../assets/Frame12.jpg'

const SecondLayer = () => {
  return (
    <div className='bg-[#CFD9E6]'>
     <div className='flex flex-col items-center'>
        <button className='text-3xl font-bold border-2 border-blue-500 py-1 text-black px-4 text-center rounded-tl-lg rounded-br-lg shadow-xl mt-9'>Our Commitment</button>
        </div>
        <div className='flex justify-evenly items-center py-16 md:flex-row flex-col gap-y-6 mb-12 '>
        <p className='px-32 '>At Limo Transport Pro, we help business executives and leisure travellers put it all together. We take you from your doorsteps to the airport, to event destinations, to local tour sites, choice hotels, niche markets and everywhere you want to go around Geneva. With us, you know you'd get the best ride in town. </p>
        <img src={SecondCar} alt='' className='w-[500px] h-[300px] p-3'/>
        </div>

    </div>
  )
}

export default SecondLayer