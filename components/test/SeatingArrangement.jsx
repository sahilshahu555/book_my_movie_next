"use client"
import React,{useState} from 'react';
import BookingForm from '@/components/test/BookingForm';
import BookingDetails from '@/components/test/BookingDetails';


const SeatingArrangement = ({ selectedSeats, onSeatSelect, onSeatDeselect,allBookingSeats ,handleBooking,bookings }) => {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', ];
  const numSeatsPerRow = [16, 16,  13, 13 ,13,16, 16 ]; // Number of seats in each row
  

// for disabled button seats which is booked previously
   const isSeatBooked = (row, seat) => {
    return allBookingSeats.includes(`${row}${seat}`);
  };
//

// for selecting seats 
  const isSeatSelected = (row, seat) => {
    return selectedSeats.includes(`${row}${seat}`);
  };

  const handleSeatClick = (row, seat) => {
    const seatId = `${row}${seat}`;
    if (isSeatSelected(row, seat)) {
      onSeatDeselect(seatId);
    } else {
      onSeatSelect(seatId);
    }
  };

// 

  


  return (
    <div className="seating-arrangement p-0.5 mt-10 w-full flex justify-center flex-col items-center">
      <h2 className="text-center mb-5 font-bold text-blue-400 text-2xl">Seating Arrangement</h2>
      <div className='flex flex-col-reverse lg:flex-row  gap-0 lg:gap-0 justify-around p-2'>

          <div classNmae="flex flex-col ">
             <BookingForm selectedSeats={selectedSeats} handleBooking={handleBooking} />
              {/* <BookingDetails bookings={bookings} /> */}
          </div>

          <div className="bg-slate-200 p-1 md:p-5 py-2 lg:px-8 md:py-5 border-2 border-white  lg:rounded-tr-xl  lg:rounded-br-xl">

          {rows.map((row, rowIndex) => (
            <>
            <span className={` ${row == "A"? "block":"hidden"} text-center my-1 md:mb-2  text-[10px] md:text-xs text-white bg-blue-500 w-24 md:w-32 m-auto rounded-xl p-1`}>{row=== "A"?"Premium Class":""}</span>

            <span className={` ${row == "C"? "block":"hidden"} text-center my-1 md:mb-2  text-[10px] md:text-xs text-white bg-blue-500 w-24 md:w-32 m-auto rounded-xl p-1`}>Gold Class</span>
            

            <span className={` ${row == "F"? "block":"hidden"} text-center my-1 md:mb-2  text-[10px]  md:text-xs text-white bg-blue-500 w-24 md:w-32 m-auto rounded-xl p-1`}>Silver Class</span>

            <div key={row} className={`row flex items-center justify-around 
             ${row == "B"? "pb-5 md:pb-3 ":"mb-1"} 
             ${row == "E"? "pb-5 md:pb-3 ":"mb-1"}
            `}>
              <span className="w-5 md:w-8 p-0.5 md:p-1 bg-blue-500 rounded-xl text-white text-center    font-semibold text-[10px] md:text-[14px] md:font-semibold">{row} </span>
              <div className='w-full'>
              {Array.from({ length: numSeatsPerRow[rowIndex] }, (elm, index) => (
              
                <button
                  key={index}
                  id={`${row}${index+1}`}
                  className={isSeatSelected(row, index + 1)?'selected mx-0.5' : 'mx-0.5 border border-black'}
                  onClick={() => {handleSeatClick(row, index + 1)}}
                  disabled={isSeatBooked(row, index + 1) ? true : false}
                >
                  {`${index + 1<10 ? `0${index + 1}`:`${index + 1}`}`}
                </button>
              ))}
              </div>
            </div>
            </>
          ))}

          </div>
          
      </div>
    </div>
  );
};

export default SeatingArrangement;