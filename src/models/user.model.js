import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        // required: true
    },
    role: {
        type: String,
        enum: ['admin', 'doctor', 'patient'],
        required: true,
        default: 'patient'
    }
});

export default model('Users',userSchema);