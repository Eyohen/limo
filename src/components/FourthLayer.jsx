import React from 'react'
import Innerdash from '../assets/RefinedTravel.jpg'
import { Link as ScrollLink } from 'react-scroll';

const FourthLayer = () => {
  return (
    <div style={{backgroundImage:`url(${Innerdash})`,
    backgroundSize:'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    // height: '500px',
    }} className='w-full h-[300px] rounded-tl-lg bg-center bg-cover duration-500 justify-center items-center'>

        <div className='items-center mx-auto flex flex-col'>
<p className='font-bold text-4xl mt-4 px-4 text-center'>The epitome of refined travel</p>
<p className='text-xl mt-2'>If time is a luxury,</p>
<p className='text-xl'>travel is the ultimate indulgence</p>
<p className='text-xl mt-2'>It's more than gong from A to B.</p>
<p className='text-xl mt-2'>It's savouring the journey,</p>
<p className='text-xl'>every step of the way</p>
</div>

    </div>
  )
}

export default FourthLayer