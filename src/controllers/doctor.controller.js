import HttpStatus from 'http-status-codes';
import * as DoctorService from '../services/doctor.service';

export const createDoctor = async (req, res) => {
    try {
        const newDoctor = await DoctorService.createDoctor(req.body);
        res.status(HttpStatus.CREATED).json(newDoctor);
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
};

export const getAllDoctors = async (req, res) => {
    try {
        const doctors = await DoctorService.getAllDoctors();
        res.status(HttpStatus.OK).json(doctors);
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
};

export const getDoctorById = async (req, res) => {
    try {
        const doctor = await DoctorService.getDoctorById(req.params.doctorId);
        res.status(HttpStatus.OK).json(doctor);
    } catch (error) {
        res.status(HttpStatus.NOT_FOUND).json({ error: error.message });
    }
};

export const updateDoctorById = async (req, res) => {
    try {
        const updatedDoctor = await DoctorService.updateDoctorById(req.params.doctorId, req.body);
        res.status(HttpStatus.OK).json(updatedDoctor);
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
};

export const deleteDoctorById = async (req, res) => {
    try {
        const deletedDoctor = await DoctorService.deleteDoctorById(req.params.doctorId);
        res.status(HttpStatus.OK).json(deletedDoctor);
    } catch (error) {
        res.status(HttpStatus.NOT_FOUND).json({ error: error.message });
    }
};
