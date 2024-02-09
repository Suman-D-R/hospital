import { Schema, model } from 'mongoose';

const doctorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    availability: {
        type: [String] 
    }
});

export default model('Doctor', doctorSchema);
