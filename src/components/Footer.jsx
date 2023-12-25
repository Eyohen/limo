import React from 'react'
import NudeLogo from '../assets/NudeLogo.png'

const Footer = () => {
  return (
    <div className='bg-[#C7C1BA] p-6'>
        <div className='flex md:flex-row flex-col items-center md:justify-evenly gap-y-9'>
      

        <div className='ml-[100px]'>
        <img src={NudeLogo} alt='' className='w-24 h-18 object-cover' />
        <p className='font-bold'>+41794186276</p>
        <p className='mt-2'>info@limotransportpro.com</p>
        <p className='font-bold mt-6'>2 Cours de Rive,</p>
        <p className='font-bold'>1202 Geneva,</p>
        <p className='font-bold'>Switzerland</p>
        <p className='mt-3'>Sitemap</p>
        <p className='mt-3 mb-6'>Location</p>
        </div>


        <div className=''>  
        <p className='font-bold'>Home</p>
        <p className='font-bold mt-3'>About Us</p>
        <p className='font-bold mt-3'>Services</p>
        <p className='font-bold mt-3'>Events</p>
        <p className='font-bold mt-3'>Contact Us</p>
        <p className='font-bold mt-3'>Reservations</p>
        <p className='font-bold mt-3'>Our Fleet</p>
        </div>


        <div className=''>  
        <p className='font-bold'>Facebook</p>
        <p className='font-bold mt-3'>Instagram</p>
        <p className='font-bold mt-3'>Tiktok</p>
        <p className='font-bold mt-3'>Twitter</p>
        <p className='font-bold mt-3'>Youtube</p>

        </div>



        </div>





        <p className='text-center text-sm mt-6'>Copyright@2023 Limo Geneva Sarl</p>
    </div>
  )
}

export default Footer