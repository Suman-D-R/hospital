import HttpStatus from 'http-status-codes';
import * as PatientService from '../services/patient.service';

export const createPatient = async (req, res) => {
    try {
        const newPatient = await PatientService.createPatient(req.body);
        res.status(HttpStatus.CREATED).json(newPatient);
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
};

export const getAllPatients = async (req, res) => {
    try {
        const patients = await PatientService.getAllPatients();
        res.status(HttpStatus.OK).json(patients);
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
};

export const getPatientById = async (req, res) => {
    try {
        const patient = await PatientService.getPatientById(req.params.patientId);
        res.status(HttpStatus.OK).json(patient);
    } catch (error) {
        res.status(HttpStatus.NOT_FOUND).json({ error: error.message });
    }
};

export const updatePatientById = async (req, res) => {
    try {
        const updatedPatient = await PatientService.updatePatientById(req.params.patientId, req.body);
        res.status(HttpStatus.OK).json(updatedPatient);
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
};

export const deletePatientById = async (req, res) => {
    try {
        const deletedPatient = await PatientService.deletePatientById(req.params.patientId);
        res.status(HttpStatus.OK).json(deletedPatient);
    } catch (error) {
        res.status(HttpStatus.NOT_FOUND).json({ error: error.message });
    }
};
