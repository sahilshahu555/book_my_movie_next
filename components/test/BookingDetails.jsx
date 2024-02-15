import React from 'react';

const BookingDetails = ({ bookings }) => {
  // console.log(bookings)
  return (
    <div className='flex flex-col justify-start w-full p-2 mb-10 rounded-xl gap-2 items-center  '>
       <h2 className="text-center mb-5 font-bold text-blue-400 text-2xl my-2">Booking Details</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-5 w-full  rounded-xl p-5 min-h-24'>
        {bookings.length<=0 ?(
          <h2 className="text-center mb-5 font-bold text-white  m-auto text-lg my-2">Please Book Movie Tickets</h2>
        ):(bookings?.map((booking, index) => (
          <ul key={index} className="flex flex-col justify-between bg-blue-300 p-5 w-64 h-44 m-auto  rounded-xl text-sm list-disc -pt-2 shadow-lg shadow-red-500" >
            <h1 className="text-center font-bold text-lg text-white">{`${booking?.username.charAt(0).toUpperCase()}${booking?.username.slice(1)}`}</h1> 
            <li className="">No. of Tickets :- {booking?.selectedSeats?.length}</li>
            <li>Date :- {booking.date}</li>
            <li>Timing :- {booking.time}</li>
            <h1 className='font-bold my-2 text-blue-400 w-[13.5rem] rounded-full bg-white text-center ' >Booked Tickets  </h1>
            <span className='text-green-400  text-xs bg-gray-500 rounded-xl p-1'>➡️ {booking?.selectedSeats.join(', ')} </span>
             
          </ul>)
        ))}
      </div>
    </div>
  );
};

export default BookingDetails;