import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import BlackNavbar from '../components/BlackNavbar'
import SecondLayer from '../components/SecondLayer'
import ThirdLayer from '../components/ThirdLayer'
import FourthLayer from '../components/FourthLayer'
import BenzSClass from '../assets/mercedes1.jpg'
import BenzEClass from '../assets/BenzE-Class.jpg'
import BenzEQS from '../assets/BenzEQS.jpg'
import firstpic from '../assets/andrea.jpg'
import secondpic from '../assets/chance.jpg'
import thirdpic from '../assets/Daniellimo.jpeg'

const Home = () => {
  return (
    <div>
        <BlackNavbar/>
        <Hero/>
        <SecondLayer/>
        <ThirdLayer />
       <FourthLayer/>
      
<div className='bg-[#CFD9E6] py-1' id='fleet'>

<div className='flex flex-col items-center'>
        <button className='text-3xl font-bold border-2 border-blue-500 py-1 text-black px-4 rounded-tl-lg rounded-br-lg shadow-xl text-center shadow-lg mt-2'>Our Fleet</button>
        </div>
   
        <div className='flex items-center md:flex-row flex-col justify-center md:space-x-32 gap-y-6 mb-12 mt-16 bg-[#CFD9E6]'>
      
          <Link to={'/quotepage'}><div>
          <img src={BenzSClass} alt='' className='w-[200px] h-[200px] object-cover  md:rounded-tl-[70px] brightness-75' />
          <p className='text-center font-bold mt-3'>Mercedez  V Class 300</p>
          <p className='text-center font-bold bg-white border-2 border-gray-400 hover:bg-black hover:text-white mt-3'>Book Now</p>
          </div>
          </Link>

          <Link to={'/quotepage'}><div>
          <img src={BenzEClass} alt='' className='w-[200px] h-[200px] object-cover brightness-75' />
          <p className='text-center font-bold mt-3'>Mercedez Benz E-Class</p>
          <p className='text-center font-bold bg-white border-2 border-gray-400 hover:bg-black hover:text-white mt-3'>Book Now</p>
          </div>
          </Link>

      

          <Link to={'/quotepage'}><div>
          <img src={BenzEQS} alt='' className='w-[200px] h-[200px] object-cover md:rounded-tr-[70px] brightness-75' />
          <p className='text-center font-bold mt-3'>Mercedez Benz EQS</p>
          <p className='text-center font-bold bg-white border-2 border-gray-400 hover:bg-black hover:text-white mt-3'>Book Now</p>
          </div>
          </Link>



          </div>
        </div>


        <div className='bg-[#FAEFE9] py-1' id='testimonials'>
          <div className='flex flex-col items-center'>
        <button className='text-3xl font-bold border-2 border-orange-500 py-1 text-black px-4 rounded-tl-lg rounded-br-lg shadow-xl text-center  mt-2'>Happy Clients</button>
        </div>
        <div className='flex items-center md:flex-row flex-col justify-center md:space-x-12 gap-y-6 mb-32 mt-8'>
          <div className='flex flex-col items-center'>
          <img src={firstpic} alt='' className='w-[100px] h-[100px] object-cover brightness-75' />
          <p className='font-bold mt-3'>Andrea Ianni</p>
          <p className='font-light mt-3'>Limo Transport Pro is my go to <br /> service whenever im in town and <br /> im always impressed with their <br/> top notch service</p>
          </div>


          <div className='flex flex-col items-center'>
          <img src={secondpic} alt='' className='w-[100px] h-[100px] object-cover brightness-75' />
          <p className='font-bold mt-3'>Chance Anne-Marie</p>
          <p className='font-light mt-3'>Limo Transport Pro  is my go to <br /> service whenever im in town and <br /> im always impressed with their <br/> top notch service</p>
          </div>


          <div className='flex flex-col items-center'>
          <img src={thirdpic} alt='' className='w-[100px] h-[100px] object-cover brightness-75' />
          <p className='font-bold mt-3'>Daniel</p>
          <p className='font-light mt-3'>Limo Transport Pro  is my go to <br /> service whenever im in town and <br /> im always impressed with their <br/> top notch service</p>
          </div>
       
          </div>
       
        </div>


        <Footer/>
    </div>
  )
}

export default Home