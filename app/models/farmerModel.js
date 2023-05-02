import mongoose from 'mongoose';
import validator from 'validator';

const Schema = mongoose.Schema;

const farmerSchema = new Schema({
      firstname:{
        type: String,
        trim: true,
        lowercase: true
      },

      lastname:{
        type: String,
        trim: true,
        lowercase: true
      },

      email:{
        type: String,
        trim: true,
        lowercase: true
      },

      password:{
        type: String,
        trim: true,
        lowercase: true
      },


      DOB: {
        type: String,
        required: true,
      },
      periodofstay: {
        type: String,
        trim: true,
        lowercase: true
      },

      dateofregistration: {
        type: String,
        trim: true,
        lowercase: true
      },

      activities: {
        type: String,
        trim: true,
        lowercase: true
      },

      Phonenumber: {
        type: String,
        required: true,
        lowercase: true
      },
      NIN: {
        type: String,
        trim: true,
        required: true,
        lowercase: true
      },
      ward: {
        type: String,
        trim: true,
        required: true,
        lowercase: true
      },
      role: {
        type: String,
        default: 'farmerOne',
        lowercase: true,
        trim: true
      }
});

const Farmer = mongoose.model('farmer', farmerSchema);

export default Farmer;