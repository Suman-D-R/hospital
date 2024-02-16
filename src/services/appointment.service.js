import Appointment from '../models/appointment.model';
import mongoose from 'mongoose';

export const createAppointment = async (appointmentData) => {
    try {
        return await Appointment.create(appointmentData);
    } catch (error) {
        throw error;
    }
};

export const getAllAppointments = async () => {
    try {
        return await Appointment.find();
    } catch (error) {
        throw error;
    }
};

export const getAppointmentById = async (appointmentId) => {
    try {
        const appointment = await Appointment.findById(appointmentId);
        if (!appointment) {
            throw new Error('Appointment not found');
        }
        return appointment;
    } catch (error) {
        throw error;
    }
};

export const updateAppointmentById = async (appointmentId, appointmentData) => {
    try {
        const updatedAppointment = await Appointment.findByIdAndUpdate(appointmentId, appointmentData, { new: true });
        if (!updatedAppointment) {
            throw new Error('Appointment not found');
        }
        return updatedAppointment;
    } catch (error) {
        throw error;
    }
};

export const deleteAppointmentById = async (appointmentId) => {
    try {
        const deletedAppointment = await Appointment.findByIdAndDelete(appointmentId);
        if (!deletedAppointment) {
            throw new Error('Appointment not found');
        }
        return deletedAppointment;
    } catch (error) {
        throw error;
    }
};


export const getTotalCountAndAppointmentsByDoctor = async () => {
    try {
        const totalCountAndAppointments = await Appointment.aggregate([
            {
                $group: {
                    _id: '$doctorId',
                    count: { $sum: 1 },
                    appointments: { $push: '$$ROOT' }
                }
            },
            {
                $lookup: {
                    from: 'doctors', 
                    localField: '_id',
                    foreignField: '_id',
                    as: 'doctor'
                }
            },
            {
                $project: {
                    _id: 0,
                    doctorId: '$_id',
                    count: 1,
                    doctorName: { $arrayElemAt: ['$doctor.name', 0] },
                    appointments: 1
                }
            }
        ]);

        return totalCountAndAppointments.map(item => ({
            doctorId: item.doctorId,
            doctorName: item.doctorName,
            count: item.count,
            appointments: item.appointments
        }));
    } catch (error) {
        throw error;
    }
};



export const getCountByDoctor = async (doctorId) => {
    try {
        const countAndAppointments = await Appointment.aggregate([
            {
                $match: {
                    doctorId: mongoose.Types.ObjectId(doctorId)
                }
            },
            {
                $group: {
                    _id: '$doctorId',
                    count: { $sum: 1 },
                    appointments: { $push: '$$ROOT' }
                }
            },
            {
                $lookup: {
                    from: 'doctors', 
                    localField: '_id',
                    foreignField: '_id',
                    as: 'doctor'
                }
            },
            {
                $project: {
                    _id: 1,
                    count: 1,
                    doctorId: { $arrayElemAt: ['$doctor._id', 0] },
                    doctorName: { $arrayElemAt: ['$doctor.name', 0] },
                    appointments: 1
                }
            }
        ]);

        return countAndAppointments.length > 0 ? countAndAppointments[0] : { doctorId, doctorName: 'Unknown', count: 0, appointments: [] };
    } catch (error) {
        throw error;
    }
};

