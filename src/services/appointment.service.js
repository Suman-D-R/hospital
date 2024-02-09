import Appointment from '../models/appointment.model';

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
