"use client"
import React, { useState ,useEffect} from 'react';
import SeatingArrangement from '@/components/test/SeatingArrangement';
import BookingDetails from '@/components/test/BookingDetails';
import { useGlobalContext } from '@/app/context/store'
// import BookingForm from '@/components/test/BookingForm';

const TestPage = () => {
  const {bookings, setBookings,allBookingSeats, setAllBookingSeats,selectedSeats, setSelectedSeats} =useGlobalContext();

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
  
  const allBooking= async()=>{
    await bookings?.forEach((elm)=>{
      console.log(elm.selectedSeats)
      // setAllBookingSeats([...allBookingSeats,...elm.selectedSeats])
      allBookingSeats.push(...elm.selectedSeats)
    })
  }

   useEffect(() => { allBooking() }, [bookings])

// updating book seats on UI start
   const allBooking1= async()=>{
    await bookings?.forEach((elm)=>{
     
      setAllBookingSeats([...allBookingSeats,...elm.selectedSeats])
     
    })
  }

   useEffect(() => { allBooking1() }, [bookings])

   // updating book seats on UI end
 
 
  const handleBooking = async(booking) => {
    setBookings([...bookings, booking]);
    setSelectedSeats([]);
    
  };

  
  
  const handleSeatSelect = (seat) => {
    setSelectedSeats([...selectedSeats, seat]);
  };
  
  const handleSeatDeselect = (seat) => {
    setSelectedSeats(selectedSeats.filter(s => s !== seat));
  };

 
  return (
    <div>
     
        <SeatingArrangement selectedSeats={selectedSeats} onSeatSelect=    {handleSeatSelect}  onSeatDeselect={handleSeatDeselect} allBookingSeats={allBookingSeats} handleBooking={handleBooking} bookings={bookings} />
       
        <BookingDetails bookings={bookings} />

        
      
    </div>
  );
};

export default TestPage;