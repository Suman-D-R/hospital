import Hospital from '../models/hospital.model';

export const createHospital = async (hospitalData) => {
    try {
        return await Hospital.create(hospitalData);
    } catch (error) {
        throw error;
    }
};

export const getAllHospitals = async () => {
    try {
        return await Hospital.find();
    } catch (error) {
        throw error;
    }
};

export const getHospitalById = async (hospitalId) => {
    try {
        const hospital = await Hospital.findById(hospitalId);
        if (!hospital) {
            throw new Error('Hospital not found');
        }
        return hospital;
    } catch (error) {
        throw error;
    }
};

export const updateHospitalById = async (hospitalId, hospitalData) => {
    try {
        const updatedHospital = await Hospital.findByIdAndUpdate(hospitalId, hospitalData, { new: true });
        if (!updatedHospital) {
            throw new Error('Hospital not found');
        }
        return updatedHospital;
    } catch (error) {
        throw error;
    }
};

export const deleteHospitalById = async (hospitalId) => {
    try {
        const deletedHospital = await Hospital.findByIdAndDelete(hospitalId);
        if (!deletedHospital) {
            throw new Error('Hospital not found');
        }
        return deletedHospital;
    } catch (error) {
        throw error;
    }
};
