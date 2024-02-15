import mongoose, { Schema } from "mongoose";

const AllSeatSchema = new Schema({
    
   allSeats: [{ type: String,required: true },],
   
})

export const AllSeat =
    mongoose.models.AllSeat || mongoose.model('AllSeat', AllSeatSchema)