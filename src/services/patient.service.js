import Patient from '../models/patient.model';

export const createPatient = async (patientData) => {
    try {
        return await Patient.create(patientData);
    } catch (error) {
        throw error;
    }
};

export const getAllPatients = async () => {
    try {
        return await Patient.find();
    } catch (error) {
        throw error;
    }
};

export const getPatientById = async (patientId) => {
    try {
        const patient = await Patient.findById(patientId);
        if (!patient) {
            throw new Error('Patient not found');
        }
        return patient;
    } catch (error) {
        throw error;
    }
};

export const updatePatientById = async (patientId, patientData) => {
    try {
        const updatedPatient = await Patient.findByIdAndUpdate(patientId, patientData, { new: true });
        if (!updatedPatient) {
            throw new Error('Patient not found');
        }
        return updatedPatient;
    } catch (error) {
        throw error;
    }
};

export const deletePatientById = async (patientId) => {
    try {
        const deletedPatient = await Patient.findByIdAndDelete(patientId);
        if (!deletedPatient) {
            throw new Error('Patient not found');
        }
        return deletedPatient;
    } catch (error) {
        throw error;
    }
};
