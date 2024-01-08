import React from 'react'
import { URL, IF } from '../url'
import { Link } from 'react-router-dom'

const EventTile = ({item}) => {
    console.log(item)
  return (
    <div className='flex flex-col items-center text-center '>
    {/* <img src={IF+item.photo ? ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyv0Jw7UCKOL4gd3nf_mqjhDc2yrsiWYd2f1L-PPzhNg&s") : (IF+item.photo)} alt='' className='w-[400px] h-[230px] object-cover items-center'/> */}
    <img src={IF+item?.photo} alt='' className='w-[400px] h-[230px] object-cover items-center'/>
    <div>
    <p className='font-bold text-xl mt-2 '>{item.exhibitionName}</p>
    <p className='text-lg mt-2'>{item.description}</p>
    </div>

   <Link to={'/quotepage'}> <button className='border-2 bg-white px-2 py-1 mt-2'>Book Now</button></Link>
  </div>
  )
}

export default EventTile