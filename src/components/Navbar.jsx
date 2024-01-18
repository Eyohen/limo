import React,{ useContext, useEffect, useState } from "react"
import { Link, useParams, useNavigate } from 'react-router-dom'
// import { UserContext } from "../context/UserContext"
import axios from "axios"
import { IF, URL } from "../url"
import Nudelogo from '../assets/LogoWhiteRemove.png'
import { HiBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { Link as ScrollLink } from 'react-scroll';


const Navbar = () => {
  // const param = useParams().id
  // const {id: userId} = useParams()
    const [modal, setModal] = useState(false)
  const [data, setData] = useState([])
  const navigate = useNavigate()

 
    const toggleModal = () => {
        setModal(!modal)
    }


    

    const fetchProfile = async () => {
      try{
        const accessToken = localStorage.getItem("access_token")
        const currentUser = JSON.parse(localStorage.getItem("currentUser"))
        console.log(typeof currentUser)
        if(!currentUser){
          return ;
        }
  

        if(!accessToken){
          // Handle the case where the access token is not available
      console.error('Access token not found')
    }

         const res = await axios.get(URL+"/api/users/"+currentUser?._id, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }
        })
        
        console.log(res.data)
         setData(res.data)
      }
      catch(err){
         console.log(err)
      }
    }
    

    useEffect(()=>{
      fetchProfile()
    
    },[])



    const logOut = async () => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("currentUser")
      setData(null)
      navigate("/login")
    }  

  return (
    <div className='h-25 items-center bg-[#FAEFE9] z-20 w-full'>
    <div className='flex justify-between p-2 px-6 items-center'>
   <div className="bg-black rounded-lg">
   <Link to={'/'}><img src={Nudelogo} alt="" className="w-24 h-18 object-cover" /></Link>
   </div>



   <div className="flex gap-9 items-center">
   {/* <Link to={'/'}> <p className='hidden md:block text-lg '>French</p></Link> */}
   {/* <Link to={'/'}> <p className='hidden md:block bg-gray-400  text-white text-lg px-10 py-2'>English</p></Link> */}
   </div>

  
    
<div className="flex items-center gap-x-6 md:ml-[700px]">
<Link to={'/quotepage'}><p className='hidden md:block text-lg font-medium border border-[#BA8565] px-3 py-2 hover:bg-black hover:text-white '>Reservation</p></Link>




{data ? (<p className="text-lg hover:px-12">{data.email}</p>) : (<Link to={'/login'}><p className='hidden md:block  text-lg font-medium hover:bg-black hover:text-white px-2'>Login</p></Link>)}


</div>
  

    {modal ? (<IoMdClose onClick={toggleModal} size={30} />) : (<HiBars3 onClick={toggleModal}  size={30} />)}
    {/* <Link to="/communities"><p className='hidden md:block text-black text-lg font-medium hover:bg-white hover:rounded-full hover:border-2 hover:border-black hover:px-1.5 '>Reservations</p></Link> */}

   
    {modal && (
        <div className="bg-white h-screen absolute right-0 top-24 pt-10 w-[350px] z-40">
          <div className="items-center justify-center flex flex-col gap-y-6">
            <Link to={'/aboutus'}><p className="font-bold text-lg hover:bg-[#EFF1F5] hover:px-12">About Us</p></Link>
            {/* <ScrollLink to="services" smooth={true} duration={500} className="font-bold text-lg hover:bg-[#EFF1F5] hover:px-12">
        Services
      </ScrollLink>
      <ScrollLink to="testimonials" smooth={true} duration={500} className="font-bold text-lg hover:bg-[#EFF1F5] hover:px-12">
        Testimonials
      </ScrollLink> */}
            <Link to={'/events'}><p className="font-bold text-lg hover:bg-[#EFF1F5] hover:px-12">Events</p></Link>
            <Link to={'/quotepage'}><p className="font-bold text-lg hover:bg-[#EFF1F5] hover:px-12">Reservations</p></Link>
            <Link to={'/contactus'}><p className="font-bold text-lg hover:bg-[#EFF1F5] hover:px-12">Contact Us</p></Link>
             {/* <ScrollLink to="fleet" smooth={true} duration={500} className="font-bold text-lg hover:bg-[#EFF1F5] hover:px-12">
        Our Fleet
      </ScrollLink> */}


                    {data ? (<p onClick={logOut} className="text-lg hover:bg-[#EFF1F5] hover:px-12">LogOut</p>) : (<Link to={'/login'}><p className="text-lg hover:bg-[#EFF1F5] hover:px-12">Login</p></Link>) }
        
            <Link to={'/register'}><p className="text-lg hover:bg-[#EFF1F5] hover:px-12">Sign Up</p></Link>


         
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

  )
}

export default Navbar