'use client';

import {createContext, useContext, useState} from "react"
import { useRouter } from 'next/navigation'

const GlobalContext =createContext();

export const GlobalContextProvider=({children})=>{
    const router = useRouter();
// for main states
    const [bookings, setBookings] = useState([]);
    const [allBookingSeats, setAllBookingSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
// for form data start
    const [username, setUsername] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [numTickets, setNumTickets] = useState(1);
// for form data End

// home and moviebook/movie page start

    //   this function is for making get req to get all bookings
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

    //   this function is for pushing all booked seats in allBookingSeats array
    const allBookingFun= async()=>{
        await bookings?.forEach((elm)=>{
          console.log(elm.selectedSeats)
          allBookingSeats.push(...elm.selectedSeats)
        })
    }

    //   this function is for updating current all booked seats on table
    const allBookingFun1= async()=>{
        await bookings?.forEach((elm)=>{
          setAllBookingSeats([...allBookingSeats,...elm.selectedSeats])
         
        })
    }
    
// home and moviebook/movie page end

// moviebook/movie1 route page start
    
    // saving form data to booking array
    const handleBooking = async(booking) => {
       setBookings([...bookings, booking]);
       setSelectedSeats([]);
    
    };

    //this function is use to select seats
    const handleSeatSelect = (seat) => {
        setSelectedSeats([...selectedSeats, seat]);
      };

    //this function is use to Unselect seats
    const handleSeatDeselect = (seat) => {
        setSelectedSeats(selectedSeats.filter(s => s !== seat));
    };

// moviebook/movie1 route page end


// booking form page start
    //   this function is for making post req for bookings
    const saveBooking= async(booking)=>{
        try {
          const res = await fetch(`/api/movie`, {
              method: 'POST',
              headers: {
                  "content-type": "application/json"
              },
              body: JSON.stringify(booking)
          })
    
          // Create Data 
          const data = await res.json();
          alert(data?.message) // Success Message
          if(data?.message === "Booking created successfully"){
          router.push('/bookmovie/movie1/#footer')
          }
    
      } catch (error) {
          alert(error.message) // Error Message
          console.log(error)
      }
      }

    //   this function is for saving booking and error
    const handleBooking1 = async(e) => {
        e.preventDefault()
        if (!username) { alert("Please Provide UserName ") 
        return ;}
        if (!date) { alert("Please Enter Date ") 
        return ;}
        if (!time) { alert("Please Select Movie Timing ") 
        return ;}
        if (selectedSeats.length !== numTickets ) { alert(`Please Select  ${numTickets} ${numTickets>1?"seats":"seat"} from ticket Bookig Table.`) 
        return ;}
    
        if (username && selectedSeats.length === numTickets && date) {
          const booking={ username, selectedSeats, date, time }
          handleBooking(booking);
          saveBooking(booking);
          setUsername('')
          setNumTickets(1)
          setDate('')
          setTime('')
    
        } 
      
        
    };
// booking form page End

// seating Arrangment page start    

   // for disabled button seats which is booked previously
    const isSeatBooked = (row, seat) => {
    return allBookingSeats.includes(`${row}${seat}`);
   };

   // for selecting seats 
    const isSeatSelected = (row, seat) => {
    return selectedSeats.includes(`${row}${seat}`);
   };

  // for nselecting and not selecting seats   
    const handleSeatClick = (row, seat) => {
        const seatId = `${row}${seat}`;
      if (isSeatSelected(row, seat)) {
       
          handleSeatDeselect(seatId);
      } else {
          handleSeatSelect(seatId);
      }
   };
// seating Arrangment page end    

//  all states and functions are wrapped into obj object.. start
    const obj={ bookings, setBookings,allBookingSeats, setAllBookingSeats,    selectedSeats, setSelectedSeats,username, setUsername,date, setDate,time, setTime,numTickets, setNumTickets,fetchBooking, handleBooking1,allBookingFun, allBookingFun1,handleBooking,handleSeatSelect,handleSeatDeselect ,isSeatBooked ,isSeatSelected,handleSeatClick}
//  all states and functions are wrapped into obj object.. end


    const obj1={bookings,allBookingSeats }
      console.log(obj1)
return(
    <GlobalContext.Provider value={obj} >
        {children}
    </GlobalContext.Provider>
)

};

export const useGlobalContext=()=>{ return useContext(GlobalContext); }