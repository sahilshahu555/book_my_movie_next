"use client"

import React,{useEffect} from 'react'
import Hero from '@/components/Hero'
import Movies from '@/components/Movies'
import { useGlobalContext } from '@/app/context/store'

const Home = () => {

  const {setBookings,} =useGlobalContext()

  const fetchBooking= async()=>{
    try {
      const res = await fetch(`/api/movie`)
      // Create Data 
      const data = await res.json();
      setBookings(data.data)
      
    } catch (error) {
        alert(error.message) // Error Message
        console.log(error)
    }
   
  }

  useEffect(() => {
    fetchBooking();
    
  }, [setBookings])
 
  return (
    <div>
    <Hero/>
    <Movies/>
   
    </div>
  )
}

export default Home
