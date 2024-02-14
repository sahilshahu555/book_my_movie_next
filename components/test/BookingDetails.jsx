import React from 'react';

const BookingDetails = ({ bookings }) => {
  console.log(bookings)
  return (
    <div className='flex flex-col justify-start w-full p-2 rounded-xl gap-2 items-center  '>
      
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {bookings.map((booking, index) => (
          <ul key={index} className="bg-slate-200 p-2 rounded-xl " >
            <li>Name :- {booking?.username}</li> 
            <li>Tickets :- {booking?.selectedSeats.join(', ')}</li>
            <li>No. of Tickets :- {booking?.selectedSeats?.length}</li>
            <li>Date :- {booking.date}</li>
            <li>Timing :- {booking.time}</li>

          </ul>
        ))}
      </div>
    </div>
  );
};

export default BookingDetails;