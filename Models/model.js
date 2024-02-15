import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema({
    bookings: {
        type: Array,
        required: true
    },
   
})

export const booking =mongoose.models.booking || mongoose.model('booking', bookingSchema)