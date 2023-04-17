const mongoose = require('mongoose');

// Create the schema
const tweetSchema = new mongoose.Schema({
   
    airline: String,
    airline: {
        type: String,
        enum: ['American', 'Southwest' & 'United']
        Default : 0
       
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 99
        Default : 0

    },
    departs: {
        type: Date,
        Validation: 0
        Default : 0
    }
},
{timestamps: true}
)
// create the model
const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;