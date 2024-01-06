import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { UserContext } from "../context/UserContext"
import axios from "axios";
// import { IF, URL } from "../url"
import Blacklogo from "../assets/logoremove.png";
import { HiBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const BlackNavbar = () => {
  const [modal, setModal] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div
      className={`items-center fixed ${
        scrollPosition > 10 ? "bg-black" : "bg-transparent"
      } z-20 w-full`}
    >
      <div className="flex justify-between p-2 px-6 items-center">
        {/* <Link to={'/'}> <p className='text-gray-400 font-bold text-3xl'>Limo Geneva Sarl</p></Link> */}
        <Link to={"/"}>
          <img src={Blacklogo} alt="" className=" w-18 h-10 object-cover" />
        </Link>

        <div className="flex gap-9 items-center">
          <Link to={"/"}>
            {" "}
            <p className="hidden md:block text-lg text-white">French</p>
          </Link>
          <Link to={"/"}>
            {" "}
            <p className="hidden md:block bg-gray-400  text-white text-lg px-10 py-2">
              English
            </p>
          </Link>
        </div>

        {/* <Link to={user?'/findapartment':"/clientlogin" }><p className='text-green-700 text-lg font-medium hover:bg-green-800 hover:text-white hover:rounded-full hover:px-1.5'>Find your Apartment</p></Link> */}
        <Link to={"/services"}>
          <p className="hidden md:block text-white text-lg font-medium border border-[#BA8565] px-3 py-2 hover:bg-white hover:text-black hover:border-black">
            Reservation
          </p>
        </Link>
        {/* <Link to="/events"><p className='hidden md:block text-black text-lg font-medium hover:bg-white hover:rounded-full hover:border-2 hover:border-black hover:px-1.5 '>Events</p></Link> */}
        {/* <Link to="/communities"><p className='hidden md:block text-black text-lg font-medium hover:bg-white hover:rounded-full hover:border-2 hover:border-black hover:px-1.5 '>Testimonials</p></Link> */}
        <Link to={"/login"}>
          <p className="hidden md:block text-white text-lg font-medium hover:bg-white hover:border-2 hover:text-black hover:px-2">
            Login
          </p>
        </Link>
        
        {modal ? (   <IoMdClose onClick={toggleModal} color="white" size={30} />) : (  <HiBars3 onClick={toggleModal} color="white" size={30} />) }
        
        
        {/* <Link to="/communities"><p className='hidden md:block text-black text-lg font-medium hover:bg-white hover:rounded-full hover:border-2 hover:border-black hover:px-1.5 '>Reservations</p></Link> */}

        {modal && (
          <div className="bg-white h-screen absolute right-0 top-24 pt-10  w-[350px]  z-40">
            <div className="items-center justify-center flex flex-col gap-y-6">
    
              <Link to={"/aboutus"}>
                <p className="font-bold text-lg hover:bg-[#EFF1F5] hover:px-12">
                  About Us
                </p>
              </Link>
              <Link to={"/"}>
                <p className="font-bold text-lg hover:bg-[#EFF1F5] hover:px-12">
                  Services
                </p>
              </Link>
              <Link to={"/"}>
                <p className="font-bold text-lg hover:bg-[#EFF1F5] hover:px-12">
                  Testimonials
                </p>
              </Link>
              <Link to={"/events"}>
                <p className="font-bold text-lg hover:bg-[#EFF1F5] hover:px-12">
                  Events
                </p>
              </Link>
              <Link to={"/quotepage"}>
                <p className="font-bold text-lg hover:bg-[#EFF1F5] hover:px-12">
                  Reservations
                </p>
              </Link>
              <Link to={"/"}>
                <p className="font-bold text-lg hover:bg-[#EFF1F5] hover:px-12">
                  Our Fleet
                </p>
              </Link>

              <Link to={""}>
                <p className="text-lg hover:bg-[#EFF1F5] hover:px-12">
                  Your Activity
                </p>
              </Link>
              <Link to={"/login"}>
                <p className="text-lg hover:bg-[#EFF1F5] hover:px-12">
                  Login/out
                </p>
              </Link>
              <Link to={"/register"}>
                <p className="text-lg hover:bg-[#EFF1F5] hover:px-12">
                  Sign-in/Up
                </p>
              </Link>
              {/* <Link to={}><p className="text-lg hover:bg-[#EFF1F5] hover:px-12">History</p></Link> */}
            </div>
            {/* <div onClick={toggleModal} className=""></div>
          <div className="modal-content rounded-xl">
            <p className='text-center text-2xl text-green-700'>Apartment A</p>
       
            <div className='flex space-x-4 items-center justify-center mt-3'>
            <button className='bg-green-700 rounded-full px-2'><HiMinusSmall /></button>
            <p>
           9
            </p>
            <button  className='bg-green-700 rounded-full px-2'><HiPlusSmall /></button>
            </div>
            {/* <div className='items-center justify-center '> */}
            {/* <button className='bg-green-700 px-2 rounded-full mx-32 mt-6' onClick={toggleModal}>Submit</button> */}
            {/* </div> */}
            {/* <button className="close-modal text-white" onClick={toggleModal} >
              <p className="text-white">CLOSE</p>
            </button> */}
            {/*           
          </div> 
          */}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlackNavbar;
