import React, {useEffect, useState} from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
import Hero1 from '../assets/Hero1.png'
import Hero2 from '../assets/Hero2.jpg'
import Hero3 from '../assets/HeroSection7.jpg'

const Hero = () => {
    // const reducedBrightness = 0.5;
const [timer, setTimer] = useState(null)

    const slides = [
      {
        url: `${Hero1}`,
        text: 'Your best ride around Geneva',
        textColor: 'text-[#BA8565]',
        textLocation: '',
        backgroundColor:'#040308'
      },
      {
        url: `${Hero2}`,
        text:`Visit exotic destinations throughout Switzerland`,
        textColor: 'text-[black]',
        textLocation: '',
        backgroundColor: 'bg-gradient-to-r from-[#3A3A3A]-500'
      },
      {
        url: `${Hero3}`,
        text:'We cover Switzerland, France and Italy',
        textColor: 'text-[white]',
        textLocation: '',
        backgroundColor: 'bg-gradient-to-r from-[#3A3A3A]-500'
      }
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    }



    useEffect(() => {
      const anotherOne = setInterval(() => {
        // if(currentIndex == slides.length - 1 ) goToSlide(0)

        setCurrentIndex(prevState => prevState === slides.length - 1 ? 0 : prevState + 1)

      }, 9000)
      setTimer(anotherOne)
        return () => {
          clearInterval(anotherOne)
          clearInterval(timer)
          setTimer(null)}
    },[])

  return (
    // <div className='p-16'>
    //     <div style={{
    //   backgroundImage: `url(${"https://wieck-mbusa-production.s3.amazonaws.com/photos/5b2e8cdb282380141e27ba3c12d435c990a7ac19/preview-928x522.jpg"})`,
    //   backgroundSize:'cover',
    //   backgroundRepeat: 'no-repeat',
    //   backgroundPosition: 'center',
    //   height: '500px',
    //   filter: `brightness(${reducedBrightness})`
    //   }}>

    //     </div>
    // </div>
    <div className='w-full h-[780px]  m-auto relative bg- '>

      <div className=' bg-gray-100 w-full h-full flex justify-center items-center'>
      {slides?.map((item, index)=><div style={{backgroundImage:`url(${item.url})`}} className={`w-full h-full  bg-center bg-cover duration-500 brightness-75 flex justify-center items-center ${index === currentIndex ? '': ''} ${index === currentIndex ? 'animate-fadeIn': ' opacity-0 hidden'}`}>
        {/* <p className='text-[#BA8565] text-5xl justify-center text-center font-bold '>{slides[currentIndex].text}</p> */}
        <p className={`${item.textColor} text-4xl  pt-[370px] ml-6 mt-[170px]`   }>{item.text}</p>

        

      </div>)}
      </div>
      
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
        <BsChevronCompactLeft onClick={prevSlide} size={25}/>
      </div>
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
        <BsChevronCompactRight onClick={nextSlide} size={25}/>
      </div>
      <div className='flex items-center justify-center gap-4 absolute top-[95%] md:-translate-x-[-600%] -translate-x-[-150%]'>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
            <RxDotFilled color='white' size={30} />
          </div>
        ))}
      </div>
    </div>





  )
}

export default Hero