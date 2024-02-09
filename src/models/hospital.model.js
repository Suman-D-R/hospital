import { Schema, model } from 'mongoose';

const hospitalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    departments: [{
        type: Schema.Types.ObjectId,
        ref: 'Department'
    }]
});

export default model('Hospital', hospitalSchema);
