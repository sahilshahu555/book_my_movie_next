import mongoose, { Schema } from "mongoose";

const BookingSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    date: { type: String, 
        require: true, 
        index:true, 
        unique:true,
        sparse:true
    },
    time: {
        type: String,
        required: true
    },
    
   selectedSeats: [
    { type: String,required: true },
   ],
   
})

export const Booking =
    mongoose.models.Booking || mongoose.model('Booking', BookingSchema)