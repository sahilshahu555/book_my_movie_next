"use client"
import React, { useEffect} from 'react';
import SeatingArrangement from '@/components/mainComponents/SeatingArrangement';
import BookingDetails from '@/components/mainComponents/BookingDetails';
import { useGlobalContext } from '@/app/context/store'
// import BookingForm from '@/components/test/BookingForm';

const TestPage = () => {
  const {bookings, setBookings, fetchBooking, allBookingFun,allBookingFun1 } =useGlobalContext();

  

//fetching all book seats 
  useEffect(() => { fetchBooking(); }, [setBookings])
 
// pushing book seats to allBookSeats array
  useEffect(() => { allBookingFun() }, [bookings])

// updating book seats on UI start
  useEffect(() => { allBookingFun1() }, [bookings])

 
  return (
    <div>
        <SeatingArrangement  />
       
        <BookingDetails bookings={bookings} />

    </div>
  );
};

export default TestPage;