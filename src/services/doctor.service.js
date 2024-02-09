import Doctor from '../models/doctor.model';

export const createDoctor = async (doctorData) => {
    try {
        return await Doctor.create(doctorData);
    } catch (error) {
        throw error;
    }
};

export const getAllDoctors = async () => {
    try {
        return await Doctor.find();
    } catch (error) {
        throw error;
    }
};

export const getDoctorById = async (doctorId) => {
    try {
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            throw new Error('Doctor not found');
        }
        return doctor;
    } catch (error) {
        throw error;
    }
};

export const updateDoctorById = async (doctorId, doctorData) => {
    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(doctorId, doctorData, { new: true });
        if (!updatedDoctor) {
            throw new Error('Doctor not found');
        }
        return updatedDoctor;
    } catch (error) {
        throw error;
    }
};

export const deleteDoctorById = async (doctorId) => {
    try {
        const deletedDoctor = await Doctor.findByIdAndDelete(doctorId);
        if (!deletedDoctor) {
            throw new Error('Doctor not found');
        }
        return deletedDoctor;
    } catch (error) {
        throw error;
    }
};
