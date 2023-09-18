import e from "express";
import mongoose from "mongoose";

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {
    type:String,
    enum: ['American', 'Southwest', 'United'],
    required: true
  },
  aiport: {
    type:String,
    enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  
  flightNo: Number,
  
  departs: {
    type: Date,
    default: function() {
      const date = new Date()
      let dateYear = date.setFullYear(date.getFullYear()+ 1)
      return dateYear
  },
  timestamps: true

  }, 
})



const Flight = mongoose.model('Flight', flightSchema)

export{
  Flight
}
