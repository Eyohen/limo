import React, {useState} from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
import HeroSection5 from '../assets/HeroSection5.jpg'
import HeroSection6 from '../assets/HeroSection6.jpg'
import HeroSection7 from '../assets/HeroSection7.jpg'

const Hero = () => {
    // const reducedBrightness = 0.5;
    const slides = [
      {
        url: `${HeroSection6}`,
        text: 'Your best ride around Geneva'
      },
      {
        url: `${HeroSection5}`,
        text:'Visit exotic destinations throughout Switzerland'
      },
      {
        url: `${HeroSection7}`,
        text:'We cover Switzerland, France and Italy'
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
    <div className='w-full h-[680px]  m-auto py-16 px-4 relative bg-[#040308]'>
      <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500 brightness-75 flex justify-center items-center'>
        {/* <p className='text-[#BA8565] text-5xl justify-center text-center font-bold '>{slides[currentIndex].text}</p> */}
        <p className='text-white text-5xl font-light pt-[370px] mr-[800px]  '>{slides[currentIndex].text}</p>

      </div>
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
        <BsChevronCompactLeft onClick={prevSlide} size={25}/>
      </div>
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer '>
        <BsChevronCompactRight onClick={nextSlide} size={25}/>
      </div>
      <div className='flex top-4 ml-64 py-2 gap-4'>
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