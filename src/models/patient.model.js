import { Schema, model } from 'mongoose';

const patientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    },
    contactInfo: {
        type: String,
        required: true
    }
});

export default model('Patient', patientSchema);
