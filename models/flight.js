import e from "express";
import mongoose from "mongoose";

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {
    type:String,
    enum: ['American', 'Southwest', 'United']
  },
  aiport: {
    type:String,
    enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  flightNo: Number,
  
  departs: {
    type: Date,
    default: function() {
      return new Date().getFullYear()
    }},

  }, {
  timestamps: true
})


const Flight = mongoose.model('Flight', flightSchema)

export{
  Flight
}
