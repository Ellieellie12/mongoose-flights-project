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
    default: () => Date.now() + 365*24*60*60000 
  },

  }, {
  timestamps: true
})


const Flight = mongoose.model('Flight', flightSchema)

export{
  Flight
}
