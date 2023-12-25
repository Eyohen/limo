import { useState } from 'react'
import Home from './pages/Home'
import {Route, Routes} from 'react-router-dom'
import Services from './pages/Services'
import QuotePage from './pages/QuotePage'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminPage from './pages/AdminPage'
import AdminLogin from './pages/AdminLogin'
import ReservationDetail from './pages/ReservationDetail'
import CreateEvent from './pages/CreateEvent'
import Events from './pages/Events'
import AdminEvent from './pages/AdminEvent'
import UpdateEvent from './pages/UpdateEvent'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'


function App() {
  

  return (
    <>
<Routes>
<Route exact path="/" element={<Home/>}/>
<Route exact path="/aboutus" element={<AboutUs/>}/>
<Route exact path="/contactus" element={<ContactUs/>}/>
<Route exact path="/services" element={<Services/>}/>
<Route exact path="/quotepage" element={<QuotePage/>}/>
<Route exact path="/login" element={<Login />}/>
<Route exact path="/register" element={<Register/>}/>
<Route exact path="/admin" element={<AdminLogin />}/>
<Route exact path="/adminpage" element={<AdminPage />}/>
<Route exact path="/reservedetail/:id" element={<ReservationDetail />}/>
<Route exact path="/createevent" element={<CreateEvent />}/>
<Route exact path="/events" element={<Events />}/>
<Route exact path="/adminevent" element={<AdminEvent />}/>
<Route exact path="/updateevent/:id" element={<UpdateEvent />}/>


</Routes>
</>
  )
}

export default App
