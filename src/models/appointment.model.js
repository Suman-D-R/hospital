import { Schema, model } from 'mongoose';

const appointmentSchema = new Schema({
    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    doctorId: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    dateTime: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['confirmed', 'cancelled','pending'],
        default: 'pending'
    }
});

export default model('Appointment', appointmentSchema);
