import React from 'react'
import NudeLogo from '../assets/NudeLogo.png'
import { Link } from 'react-router-dom'
import tiktok from '../assets/tiktok.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'
import facebook from '../assets/facebook.png'


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
        <Link to={'/'}><p className='font-bold'>Home</p></Link>
        <Link to={'/aboutus'}><p className='font-bold mt-3'>About Us</p></Link>
        <Link to={'/services'}><p className='font-bold mt-3'>Services</p></Link>
        <Link to={'/events'}><p className='font-bold mt-3'>Events</p></Link>
        <Link to={'/contactus'}><p className='font-bold mt-3'>Contact Us</p></Link>
        <Link to={'/quotepage'}><p className='font-bold mt-3'>Reservations</p></Link>
        <Link to={'/fleet'}><p className='font-bold mt-3'>Our Fleet</p></Link>
        </div>


        <div className=''>  

        <div className='flex items-center gap-1'>
        <img src={facebook} alt='' className='w-4'/><p className='font-bold'>Facebook</p>
        </div>


        <div className='flex items-center gap-1'>
        <img src={instagram} alt='' className='w-4 mt-4'/><p className='font-bold mt-3'>Instagram</p>
        </div>

        <div className='flex items-center '>
        <img src={tiktok} alt='' className='w-4 mt-4' /><p className='font-bold mt-3'>Tiktok</p>
        </div>


        <div className='flex items-center gap-1'>
        <img src={twitter} alt='' className='w-4 mt-4' /><p className='font-bold mt-3'>Twitter</p>
        </div>


        <div className='flex items-center gap-1'>
        <img src={youtube} alt='' className='w-4 mt-4' /><p className='font-bold mt-3'>Youtube</p>
        </div>

        </div>



        </div>





        <p className='text-center text-sm mt-6'>Copyright@2023 Limo Geneva Sarl</p>
    </div>
  )
}

export default Footer