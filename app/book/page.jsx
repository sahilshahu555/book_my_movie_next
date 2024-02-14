"use client"
import React, { useState ,useEffect} from 'react';
import SeatingArrangement from '@/components/test/SeatingArrangement';
import BookingDetails from '@/components/test/BookingDetails';
import BookingForm from '@/components/test/BookingForm';

const TestPage = () => {
  const [bookings, setBookings] = useState([]);
  const [allBookingSeats, setAllBookingSeats] = useState([]);

  const [selectedSeats, setSelectedSeats] = useState([]);
  
  const allBooking=()=>{
    bookings?.map((elm)=>(setAllBookingSeats([...allBookingSeats, ...elm.selectedSeats]) ))
    
  }
  useEffect(() => {
    allBooking()
  
   
  }, [bookings])
  
 
  const handleBooking = (booking) => {
    setBookings([...bookings, booking]);
    setSelectedSeats([]);
  };
  
  const handleSeatSelect = (seat) => {
    setSelectedSeats([...selectedSeats, seat]);
  };
  
  const handleSeatDeselect = (seat) => {
    setSelectedSeats(selectedSeats.filter(s => s !== seat));
  };

  console.log(allBookingSeats)
  return (
    <div>
      {/* <h1 className='font-bold text-3xl text-center text-white'>Book My Movie</h1> */}
      <div>
        <SeatingArrangement selectedSeats={selectedSeats} onSeatSelect={handleSeatSelect} 
          onSeatDeselect={handleSeatDeselect} allBookingSeats={allBookingSeats}
          handleBooking={handleBooking} bookings={bookings}
        />
        <div className="flex flex-col justify-center gap-5 items-center w-full   p-5">
        <h2 className='font-bold text-2xl text-white'>Booking Details</h2>
        <BookingDetails bookings={bookings} />
        {/* <BookingForm selectedSeats={selectedSeats} handleBooking={handleBooking} /> */}
        </div>
      </div>
    </div>
  );
};

export default TestPage;