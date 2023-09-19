import mongoose from "mongoose";

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  content: String,
  seat: {
    type: String,
    match: /[A-F][1-9]\d?/
  },
  price: 
    {type: Number, min: 0}
})

const flightSchema = new Schema({
  airline: {
    type:String,
    enum: ['American', 'Southwest', 'United'],
    required: true
  },
  airport: {
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
    }
  },
  tickets: [ticketSchema],
  meals:[{type: Schema.Types.ObjectId, ref: 'Meal'}]
}, {
  timestamps: true
})


const Flight = mongoose.model('Flight', flightSchema)

export{
  Flight
}
