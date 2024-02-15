import { connectDb } from "@/Database/db";
import { Booking } from "@/Models/booking.model";
import { NextResponse } from "next/server";


connectDb();

//ROUTE 1 : GET all movies [http://localhost:3000/api/movie]


export async function GET( ) {
    
    try {
        // Create Get Single status
        const data = await Booking.find()

        // Return getSingleEmployee and status 
        return NextResponse.json( {data},{ status: 200,} )
    } catch (error) {
        console.log(error);
        // Return Error And status 
        return NextResponse.json(
            { error: 'failed to get  bookings', }, {  status: 404, }
        )
    }
}

//ROUTE 2 : POST one movie booking [http://localhost:3000/api/movie]

export async function POST (req){
    const {username, date, time,selectedSeats}= await req.json();
 
    if( !username || !date || !time || !selectedSeats ){
       return NextResponse.json({message:"All Fields are required"},{status:404})
    }
 
    const booking= await Booking.findOne({username})
 
    if(booking){
       return NextResponse.json({ error : "Booking Already exists"})
    }
 
    const newBooking= new Booking({
        username, date, time,selectedSeats
    })
 
    try{
       const saveBooking= await newBooking.save();
       return NextResponse.json(
          {saveBooking, message:"Booking created successfully"},{status:201}
       )
    }catch(error){
       console.log(error)
       return NextResponse.json({error:"Failed to create Booking"},{status:404})
    }
 
 }

