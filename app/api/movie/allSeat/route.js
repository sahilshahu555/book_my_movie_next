import { connectDb } from "@/Database/db";
import { AllSeat } from "@/Models/allSeats.model";
import { NextResponse } from "next/server";


connectDb();

//ROUTE 1 : GET all movies [http://localhost:3000/api/movie]


export async function GET( ) {
    
    try {
        // Create Get Single status
        const data = await AllSeat.find()

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

export async function PUT(req) {
    // Get employeeId From params 
    const seatID='65ce2de644ad276e36b99271';

 
    // Get Data From Frontend 
    const { allSeat } = await req.json();
 
    try {
        // Create Employee ( Get Employee By Id )
        let allSeatFound = await AllSeat.findById(seatID);
        // set employee name 
        allSeatFound.allSeats = allSeat;
       
 
        // Create Update Employee
        const updatedStatus = await allSeatFound.save();
        let afterUpdateAllSeats = await AllSeat.findById(seatID);
 
        // Return updatedEmployee, message and status 
        return NextResponse.json(
            { afterUpdateAllSeats, message: "All Seats Updated Successfully"},
            { status: 201}
        )
    } catch (error) {
        console.log(error)
 
        // Return Error And Status 
      return NextResponse.json( {error: 'failed to update Stutus',}, {status: 404,})
    }
 }



