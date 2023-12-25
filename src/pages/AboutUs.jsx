import React from 'react'
import Navbar from '../components/Navbar'
import Aboutus from '../assets/Aboutus.jpg'
import Footer from '../components/Footer'

const AboutUs = () => {
  return (
    <div className='bg-[#FAEFE9] '>
        <Navbar/>
        <div className='py-16 px-[280px]'>
        <button className='text-3xl font-bold border-2 border-purple-400 py-1 text-black px-4 shadow-lg mt-2'>About Us</button>
        </div>
        <div className='flex justify-center items-center gap-10 mb-32'>
            <div>
                <p className='text-xl'>We are a team of experienced chauffeurs, based in Geneva, <br/>
                Switzerlad where we provide luxury travel since 2014.
                </p>

                <p className='mt-6 text-xl'>We take charge of your every move, crafting professionalized <br />
                journeys that meet your precise needs with professionalism and courtesy.
                </p>

                <p className='mt-6 text-xl'>Forget logistical concerns; relax and indulge in the comfort  <br /> 
                of our exceptional fleet.</p>

                <p className='mt-6 text-xl'>Let us guide you through Switzerland's stunning <br /> 
                landscapes, ensuring safety and discretion.</p>

                <p className='mt-6 text-xl'>Each ride is an experience of refined excellence, where <br /> 
                quality service and efficiency pave the way for <br /> unforgettable arrivals</p>
            </div>

            <img src={Aboutus} alt='' className='w-[450px] h-[300px]' />
        </div>
        <Footer/>
    </div>
  )
}

export default AboutUs