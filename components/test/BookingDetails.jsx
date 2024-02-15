import React from 'react';

const BookingDetails = ({ bookings }) => {
  // console.log(bookings)
  return (
    <div className='flex flex-col justify-start w-full p-2 rounded-xl gap-2 items-center  '>
       <h2 className="text-center mb-5 font-bold text-blue-400 text-2xl my-2">Booking Details</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-blue-300 w-full  rounded-xl p-5 min-h-24'>
        {bookings.length<=0 ?(
          <h2 className="text-center mb-5 font-bold text-white  m-auto text-lg my-2">Please Book Movie Tickets</h2>
        ):(bookings?.map((booking, index) => (
          <ul key={index} className="bg-slate-200 p-5 w-52 m-auto pl-5 rounded-xl text-sm list-disc " >
            <li className='font-bold text-md'>Name :- {booking?.username}</li> 
            <li>Tickets :- {booking?.selectedSeats.join(', ')}</li>
            <li>No. of Tickets :- {booking?.selectedSeats?.length}</li>
            <li>Date :- {booking.date}</li>
            <li>Timing :- {booking.time}</li>
          </ul>)
        ))}
      </div>
    </div>
  );
};

export default BookingDetails;