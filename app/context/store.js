'use client';

import {createContext, useContext, useState} from "react"


const GlobalContext =createContext();

export const GlobalContextProvider=({children})=>{
// for main states
    const [bookings, setBookings] = useState([]);
    const [allBookingSeats, setAllBookingSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
// for form data
    const [username, setUsername] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [numTickets, setNumTickets] = useState(1);


    const obj={ bookings, setBookings,allBookingSeats, setAllBookingSeats,    selectedSeats, setSelectedSeats,username, setUsername,date, setDate,time, setTime,numTickets, setNumTickets }
    const obj1={bookings,allBookingSeats}
      console.log(obj1)
return(
    <GlobalContext.Provider value={obj} >
        {children}
    </GlobalContext.Provider>
)

};

export const useGlobalContext=()=>{
    return useContext(GlobalContext);
}