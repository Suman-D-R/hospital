import { boolean } from '@hapi/joi';
import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String
    },
    admin:{
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
