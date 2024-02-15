"use client"
import React, { useState ,useEffect} from 'react';
import SeatingArrangement from '@/components/test/SeatingArrangement';
import BookingDetails from '@/components/test/BookingDetails';
import { useGlobalContext } from '@/app/context/store'
// import BookingForm from '@/components/test/BookingForm';

const TestPage = () => {
  const {bookings, setBookings,allBookingSeats, setAllBookingSeats,selectedSeats, setSelectedSeats} =useGlobalContext();

  
  const allBooking= ()=>{
    bookings?.map((elm)=>(
      setAllBookingSeats([...allBookingSeats, ...elm.selectedSeats])
    ))
  }

  useEffect(() => { allBooking() }, [setBookings])
  
 
 
 
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