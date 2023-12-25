import React from 'react'
import SecondCar from '../assets/Frame12.jpg'

const SecondLayer = () => {
  return (
    <div className='bg-[#CFD9E6]'>
        <div className='justify-center'>
        <div className='flex justify-evenly items-center py-16 md:flex-row flex-col gap-y-6 mb-12 '>
        <p className='p-3'>At Limo Geneva Sarl, we help business executives and <br /> leisure travellers put it all together. We take you from your <br /> doorsteps to the airport, to event destinations, to local tour <br /> sites, choice hotels, niche markets and everywhere you <br /> want to go around Geneva. With us, you know you'd get the <br /> best ride in town. </p>
        <img src={SecondCar} alt='' className='w-[500px] h-[300px] p-3'/>
        </div>
        </div>
    </div>
  )
}

export default SecondLayer