"use client"
import { useGlobalContext } from '@/app/context/store'
import { useRouter } from 'next/navigation'


const BookingForm = ({ selectedSeats, handleBooking }) => {
  const {username, setUsername,date, setDate,time,setTime,
          numTickets, setNumTickets} =useGlobalContext();

  const router = useRouter();

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
      // router.push('/')
      }



  } catch (error) {
      alert(error.message) // Error Message
      console.log(error)
  }
}

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

      // alert("Congratulations, Tickets Booking Successful")
    } 
  
    
  };

  return (
    <div className='flex flex-col  justify-between border-2 border-white   lg:rounded-tl-xl  lg:rounded-bl-xl bg-blue-300 h-[25rem] p-5'>
      <h1 className="font-bold text-xl text-center text-white">Tickets Booking Form</h1>
      <form onSubmit={handleBooking1} className='flex flex-col p-5 rounded-xl  gap-2 mt-2 text-sm'>
      <label>Enter Your Name</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your name"
        className='border rounded-md p-0.5 '
      
      />
       <label>Enter Date</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Enter your name"
        className='border rounded-md p-0.5 '
      
      />
      <label>Select Movie Timing</label>
      <select className='border rounded-md p-0.5 ' value={time} onChange={(e) => {setTime(e.target.value)}}>
          <option  value="">select</option>
          <option  value="12 pm">12 pm</option>
          <option  value="3 pm">3 pm</option>
          <option  value="6 pm">6 pm</option>
          <option  value="9 pm">9 pm</option>

      </select>

      <label>Select No. of Tickets</label>
      <select className='border rounded-md p-0.5 ' value={numTickets} onChange={(e) => setNumTickets(parseInt(e.target.value))}>
        {[...Array(8).keys()].map(i => (
          <option key={i+1} value={i+1}>{i+1}</option>
        ))}
      </select>

      <button type="submit" className="bg-blue-500 rounded-xl my-2 p-1 text-white" >Book Tickets</button>
      </form>
    </div>
  );
};

export default BookingForm;